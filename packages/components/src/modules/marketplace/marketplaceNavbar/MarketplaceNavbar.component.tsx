import React, { useEffect, useState } from "react";
import * as Styled from "./MarketplaceNavbar.styles";
import { Category } from "@app/types";
import { useGetProductCategories, useMarketplaceContext } from "@app/hooks";
import { Paragraph } from "@app/components";
import { colors } from "@app/styles";

export const MarketplaceNavbar = () => {
  const [categories, setCategories] = useState<Category[] | undefined>();
  const { currentCategory, setCurrentCategory } = useMarketplaceContext();
  useEffect(() => {
    const getCategories = async () => {
      await useGetProductCategories().then((res) => {
        res && setCategories(res);
        if (!currentCategory) setCurrentCategory(res[0]);
      });
    };

    !categories && getCategories();
  }, [categories]);

  return (
    <Styled.NavbarContainer>
      {categories?.map((category, i) => (
        <Styled.NavbarLink
          key={`${i}-category-link`}
          onClick={() => {
            setCurrentCategory(category);
          }}
          isCurrent={currentCategory == category}
        >
          <Paragraph text={category.title} color={currentCategory == category ? colors.primary["500"] : colors.offWhite["900"]} />
        </Styled.NavbarLink>
      ))}
    </Styled.NavbarContainer>
  );
};
