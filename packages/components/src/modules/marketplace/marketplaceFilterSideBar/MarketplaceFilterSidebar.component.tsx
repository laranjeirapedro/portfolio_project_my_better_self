import React, { useState } from "react";
import * as Styled from "./MarketplaceFilterSidebar.styles";
import { useMarketplaceContext } from "@app/hooks";
import { Paragraph, Rating } from "@app/components";

export const MarketplaceFilterSidebar = () => {
  const {
    priceFilter,
    discountFilter,
    reviewFilter,
    setDiscountFilter,
    setPriceFilter,
    setReviewFilter,
  } = useMarketplaceContext();
  const reviewOptions = [
    { id: "all", label: "All", value: 0 },
    { id: "4-stars-filter", label: "& up", value: 4 },
    { id: "3-stars-filter", label: "& up", value: 3 },
    { id: "2-stars-filter", label: "& up", value: 2 },
    { id: "1-stars-filter", label: "& up", value: 1 },
  ];

  const priceOptions = [
    { id: "all", label: "All", value: 0 },
    { id: "under-25", label: "Under $25", value: 25 },
    { id: "under-50", label: "Under $50", value: 50 },
    { id: "under-100", label: "Under $100", value: 100 },
    { id: "under-200", label: "Under $200", value: 200 },
    { id: "above-200", label: "$200 & Above", value: 201 },
  ];

  const discountOptions = [
    { id: "all", label: "All", value: 0 },
    { id: "10-percent", label: "10% off or more", value: 10 },
    { id: "25-percent", label: "25% off or more", value: 25 },
    { id: "50-percent", label: "50% off or more", value: 50 },
    { id: "70-percent", label: "70% off or more", value: 70 },
  ];

  return (
    <Styled.SideBarContainer>
      <Styled.FilterContainer>
        <Paragraph text="Customer Reviews" style={{ fontWeight: 600 }} />
        {reviewOptions.map((option) => (
          <Styled.FilterOptionContainer>
            <Styled.RadioButton
              type="radio"
              id={option.id}
              name="review"
              value={option.value}
              checked={reviewFilter == option.value}
              onChange={(e) => {
                setReviewFilter(Number(e.currentTarget.value));
              }}
            />
            <label htmlFor={option.id}>
              <Styled.FilterOptionContainer>
                {option.value !== 0 && <Rating rating={option.value} />}
                {option.label}
              </Styled.FilterOptionContainer>
            </label>
          </Styled.FilterOptionContainer>
        ))}
      </Styled.FilterContainer>
      <Styled.FilterContainer>
        <Paragraph text="Price" style={{ fontWeight: 600 }} />
        {priceOptions.map((option) => (
          <Styled.FilterOptionContainer>
            <Styled.RadioButton
              type="radio"
              id={option.id}
              name="price"
              value={option.value}
              checked={priceFilter == option.value}
              onChange={(e) => {
                setPriceFilter(Number(e.currentTarget.value));
              }}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </Styled.FilterOptionContainer>
        ))}
      </Styled.FilterContainer>
      <Styled.FilterContainer>
        <Paragraph text="Discount" style={{ fontWeight: 600 }} />
        {discountOptions.map((option) => (
          <Styled.FilterOptionContainer>
            <Styled.RadioButton
              type="radio"
              id={option.id}
              name="discount"
              value={option.value}
              checked={discountFilter == option.value}
              onChange={(e) => {
                setDiscountFilter(Number(e.currentTarget.value));
              }}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </Styled.FilterOptionContainer>
        ))}
      </Styled.FilterContainer>
    </Styled.SideBarContainer>
  );
};
