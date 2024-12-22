import { useQueries } from '@tanstack/react-query';

export interface SearchProductResponse {
  SearchResult: { Items: ProductItem[] };
  keyword: string;
}

export type ProductItem = {
  ASIN: string;
  DetailPageURL: string;
  Images: {
    Primary: {
      Large: {
        URL: string;
        Height: number;
        Width: number;
      };
    };
  };
  ItemInfo: {
    Title: {
      DisplayValue: string;
    };
  };
  Offers: {
    Listings: Array<{
      Price: {
        Amount: number;
      };
    }> | null;
  };
};

const searchAmazonKeyword = async ({
  keyword,
  numberOfProducts,
}: {
  keyword: string;
  numberOfProducts: number;
}): Promise<SearchProductResponse> => {
  const params = new URLSearchParams({ keyword, numberOfProducts: `${numberOfProducts}` });
  const response = await fetch(`/api/amazon-search-products?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to search products');
  }

  const data = await response.json();

  return { ...data, keyword };
};

export const useSearchAmazonKeywords = ({
  keywords,
}: {
  keywords: { keyword: string; numberOfProducts: number }[];
}) => {
  return useQueries({
    queries: keywords.map(({ keyword, numberOfProducts }) => ({
      queryKey: ['amazon-search', keyword],
      queryFn: () => searchAmazonKeyword({ keyword, numberOfProducts }),
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
      cacheTime: 1000 * 60 * 30, // Keep in cache for 30 minutes
      retry: 1,
      retryDelay: (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 30000),
    })),
  });
};
