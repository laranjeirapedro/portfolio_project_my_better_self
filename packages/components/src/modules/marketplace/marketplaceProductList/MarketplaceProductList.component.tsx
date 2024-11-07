import React, { useEffect, useState } from "react";
import * as Styled from "./MarketplaceProductList.styles";
import { AmazonProductCard, AmazonProductCardProps } from "../../../molecules";
import { useGetProducts } from "../../../../../hooks/src/cms";

export type MarketplaceProductListProps = {
  onSubmit: (props: any) => Promise<void>;
  error: string;
  handleEmailChanged: (value: string) => void;
  handlePasswordChanged: (value: string) => void;
};

export const MarketplaceProductList = () => {
  const [products, setProducts] = useState<AmazonProductCardProps[] | null>();

  useEffect(() => {
    const getProducts = async () => {
      await useGetProducts().then((res) => {
        res && setProducts(res);
      });
    };

    !products && getProducts();
  }, [products]);

  return (
    <Styled.ProductList>
      {products?.map((product, i) => <AmazonProductCard key={`${i}-product`} {...product}/>)}
    </Styled.ProductList>
  );
};
