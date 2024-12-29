import { useQueries } from '@tanstack/react-query';
import { ProductItem } from './useSearchAmazonKeywords';

interface GetProductResponse {
  ItemsResult: { Items: ProductItem[] };
  ASIN: string;
}

const searchAmazonASIN = async ({ ASIN }: { ASIN: string }): Promise<GetProductResponse> => {
  const params = new URLSearchParams({ ASIN });
  const response = await fetch(`/api/amazon-get-products?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to search products');
  }

  const data = await response.json();

  return { ...data, ASIN };
};

export const useSearchAmazonIDs = ({ productIDs }: { productIDs: Array<string> }) => {
  return useQueries({
    queries: productIDs.map((ASIN) => ({
      queryKey: ['amazon-search', ASIN],
      queryFn: () => searchAmazonASIN({ ASIN }),
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
      cacheTime: 1000 * 60 * 30, // Keep in cache for 30 minutes
      retry: 1,
      retryDelay: (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 30000),
    })),
  });
};
