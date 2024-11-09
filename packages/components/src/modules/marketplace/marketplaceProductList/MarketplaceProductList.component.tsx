import React, { useEffect, useState } from "react";
import * as Styled from "./MarketplaceProductList.styles";
import { AmazonProductCard, AmazonProductCardProps } from "../../../molecules";
import { useGetProducts } from "../../../../../hooks/src/cms";
import { useMarketplaceContext } from "@app/hooks";

export type MarketplaceProductListProps = {
  onSubmit: (props: any) => Promise<void>;
  error: string;
  handleEmailChanged: (value: string) => void;
  handlePasswordChanged: (value: string) => void;
};

export const MarketplaceProductList = () => {
  const [products, setProducts] = useState<AmazonProductCardProps[] | null>();
  const { currentCategory } = useMarketplaceContext();

  useEffect(() => {
    const getProducts = async () => {
      await useGetProducts(currentCategory?.slug.current).then((res) => {
        res && setProducts(res);
      });
    };
  
    currentCategory && getProducts();
  }, [currentCategory]);

  return (
    <Styled.ProductList>
      {products?.map((product, i) => <AmazonProductCard key={`${i}-product`} {...product}/>)}
    </Styled.ProductList>
  );
};
