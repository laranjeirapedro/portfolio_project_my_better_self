import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useSearchAmazonKeywords, useSearchAmazonIDs } from '../..';

export type Product = {
  id: string;
  title: string;
  price: number;
  productUrl: string;
  imageUrl: string;
  keyword?: string;
};

interface ProductsContextType {
  items: Product[];
  getItemById: (id: string) => Product | undefined;
  getItemByKeyword: (keyword: string) => Product | undefined;
  updateItems: (newItems: Product[]) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{
  children: React.ReactNode;
  keywords: { keyword: string; numberOfProducts: number }[];
  productIDs: {
    ASIN: string;
    productReferenceName: string;
  }[];
}> = ({ children, keywords, productIDs }) => {
  const [items, setItems] = useState<Product[]>([]);

  const keywordSearchResults = useSearchAmazonKeywords({ keywords });

  const idsSearchResults = useSearchAmazonIDs({
    productIDs: productIDs && productIDs.length > 0 ? productIDs.map((ASIN) => ASIN.ASIN) : [],
  });

  const productsByIDs = useMemo<Product[]>(() => {
    return idsSearchResults.reduce<Product[]>((acc, result) => {
      if (result.status === 'success') {
        return [
          ...acc,
          ...(result.data?.ItemsResult.Items.map((item) => ({
            id: item.ASIN,
            title: item.ItemInfo.Title.DisplayValue,
            productUrl: item.DetailPageURL,
            imageUrl: item.Images.Primary.Large.URL,
            price: item.Offers?.Listings?.[0]?.Price.Amount ?? 0,
          })) || []),
        ];
      }
      return acc;
    }, []);
  }, [idsSearchResults]);

  const productsByKeywords = useMemo<Product[]>(() => {
    return keywordSearchResults.reduce<Product[]>((acc, result) => {
      if (result.status === 'success') {
        return [
          ...acc,
          ...(result.data?.SearchResult.Items.map((item) => ({
            id: item.ASIN,
            title: item.ItemInfo.Title.DisplayValue,
            productUrl: item.DetailPageURL,
            imageUrl: item.Images.Primary.Large.URL,
            price: item.Offers?.Listings?.[0]?.Price.Amount ?? 0,
            keyword: result.data.keyword,
          })) || []),
        ];
      }
      return acc;
    }, []);
  }, [keywordSearchResults]);

  const allProducts = useMemo(() => {
    return [...productsByKeywords, ...productsByIDs];
  }, [productsByKeywords, productsByIDs]);

  const getItemById = (id: string) => {
    return allProducts.find((item) => item.id === id);
  };

  const getItemByKeyword = (keyword: string) => {
    return allProducts.find((item) => item.keyword === keyword);
  };

  const updateItems = (newItems: Product[]) => {
    setItems(newItems);
  };

  const value = {
    items: allProducts,
    getItemById,
    getItemByKeyword,
    updateItems,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
