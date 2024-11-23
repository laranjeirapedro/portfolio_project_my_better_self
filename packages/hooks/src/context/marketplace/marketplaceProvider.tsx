import { createContext, useContext, useState } from "react";
import { Category } from "@app/types";

type MarketplaceData = {
  currentCategory?: Category;
  setCurrentCategory: (category: Category) => void;
  reviewFilter?: number;
  setReviewFilter: (minRating: number) => void;
  priceFilter?: number;
  setPriceFilter: (maxPrice: number) => void;
  discountFilter?: number;
  setDiscountFilter: (maxDiscount: number) => void;
};

type MarketplaceProviderProps = {
  children: React.ReactNode;
};

const MarketplaceContext = createContext<MarketplaceData>({
  setCurrentCategory: (category: Category) => {},
  setReviewFilter: (minRating: number) => {},
  setPriceFilter: (maxPrice: number) => {},
  setDiscountFilter: (maxDiscount: number) => {},
});

export const MarketplaceProvider = ({ children }: MarketplaceProviderProps) => {
  const [currentCategory, setCurrentCategory] = useState<Category>();
  const [reviewFilter, setReviewFilter] = useState<number>(0);
  const [priceFilter, setPriceFilter] = useState<number>(0);
  const [discountFilter, setDiscountFilter] = useState<number>(0);
  return (
    <MarketplaceContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        reviewFilter,
        setReviewFilter,
        priceFilter,
        setPriceFilter,
        discountFilter,
        setDiscountFilter
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplaceContext = () => {
  return useContext(MarketplaceContext);
};
