import { createContext, useContext, useState } from "react";
import { Category } from "@app/types";

type MarketplaceData = {
  currentCategory?: Category;
  setCurrentCategory: (category: Category) => void;
};

type MarketplaceProviderProps = {
  children: React.ReactNode;
};

const MarketplaceContext = createContext<MarketplaceData>({
  setCurrentCategory: (category: Category) => {},
});

export const MarketplaceProvider = ({ children }: MarketplaceProviderProps) => {
  const [currentCategory, setCurrentCategory] = useState<Category>();
  return (
    <MarketplaceContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplaceContext = () => {
  return useContext(MarketplaceContext);
};
