import React, { createContext, useContext, useMemo, useState } from 'react';
import { useSearchAmazonKeywords } from '../../amazon/useSearchAmazonKeywords';

export type Product = {
  id: string;
  title: string;
  price: number;
  productUrl: string;
  imageUrl: string;
};

interface ProductsContextType {
  items: Product[];
  getItemById: (id: string) => Product | undefined;
  getItemByKeyword: (keyword: string) => Product | null;
  updateItems: (newItems: Product[]) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{
  children: React.ReactNode;
  keywords: { keyword: string; numberOfProducts: number }[];
  productIDs: { ASIN: string };
}> = ({ children, keywords, productIDs }) => {
  const [items, setItems] = useState<Product[]>([]);

  const searchResults = useSearchAmazonKeywords({ keywords });

  const productsByKeywords = useMemo<{ [key: string]: Product[] }>(() => {
    return (
      searchResults.reduce<{ [key: string]: Product[] }>((acc, result) => {
        if (result.status === 'success') {
          return {
            ...acc,
            [result.data.keyword]: result.data.SearchResult.Items.map((item) => ({
              id: item.ASIN,
              title: item.ItemInfo.Title.DisplayValue,
              productUrl: item.DetailPageURL,
              imageUrl: item.Images.Primary.Large.URL,
              price: item.Offers?.Listings?.[0]?.Price.Amount ?? 0,
            })),
          };
        }
        return acc;
      }, {}) ?? {}
    );
  }, [searchResults, keywords]);

  const getItemById = (id: string) => {
    return items.find((item) => item.id === id);
  };

  const getItemByKeyword = (keyword: string) => {
    return productsByKeywords?.[keyword]?.[0] ?? null;
  };

  const updateItems = (newItems: Product[]) => {
    setItems(newItems);
  };

  const value = {
    items,
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
