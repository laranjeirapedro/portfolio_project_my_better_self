import { useGetProducts, useMarketplaceContext } from "@app/hooks";
import React, { useEffect, useMemo, useState } from "react";
import { Image, SubHeading } from "../../../atoms";
import { AmazonProductCard, AmazonProductCardProps } from "../../../molecules";
import NoProductsImage from "./assets/no-products-4.png";
import * as Styled from "./MarketplaceProductList.styles";

const applyFilters = (
  products: AmazonProductCardProps[],
  reviewFilter: number,
  priceFilter: number,
  discountFilter: number,
): AmazonProductCardProps[] => {
  return products.filter((product) => {
    const matchesReview =
      reviewFilter > 0 ? product.rating >= reviewFilter : true;
    const matchesPrice =
      priceFilter > 0
        ? priceFilter > 200
          ? product.price >= 200
          : product.price <= priceFilter
        : true;
    const matchesDiscount =
      discountFilter > 0
        ? product.promoPrice &&
          ((product.price - product.promoPrice) / product.price) * 100 >=
            discountFilter
        : true;

    return matchesReview && matchesPrice && matchesDiscount;
  });
};

export const MarketplaceProductList = () => {
  const [products, setProducts] = useState<AmazonProductCardProps[] | null>();
  const { currentCategory, reviewFilter, priceFilter, discountFilter } =
    useMarketplaceContext();

  useEffect(() => {
    const getProducts = async () => {
      await useGetProducts(currentCategory?.slug.current).then((res) => {
        res && setProducts(res);
      });
    };

    currentCategory && getProducts();
  }, [currentCategory]);

  const filteredProducts = useMemo(() => {
    return applyFilters(
      products ?? [],
      reviewFilter ?? 0,
      priceFilter ?? 0,
      discountFilter ?? 0,
    );
  }, [products, reviewFilter, priceFilter, discountFilter]);

  return (
    <Styled.ProductList>
      {filteredProducts?.length > 0 &&
        filteredProducts.map((product, i) => (
          <AmazonProductCard key={`${i}-product`} {...product} />
        ))}
      {(!filteredProducts || filteredProducts?.length == 0) && (
        <Styled.NoProductsContainer>
          <Image
            data={{
              image: {
                url: NoProductsImage,
                originalFilename: "No Products Image",
              },
              height: 250,
              width: 250,
            }}
            objectFit="contain"
          />
          <SubHeading
            text="Sorry, we did not find any products related to your search."
            textAlign="center"
          />
        </Styled.NoProductsContainer>
      )}
    </Styled.ProductList>
  );
};
