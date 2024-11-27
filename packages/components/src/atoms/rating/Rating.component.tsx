import React, { createElement, useCallback } from "react";
import * as Styled from "./Rating.styles";
import { RatingProps } from "./Rating.types";
import { useRouter } from "next/router";
import { Star } from "./Star";

export const Rating = (data: RatingProps) => {
  const { rating } = data;
  const router = useRouter();

  return (
    <Styled.RatingWrapper>
      <Styled.RatingWrapper>
        {Array.from({ length: 5 }).map((_, index) => {
          const clip =
            rating >= index + 1
              ? 10 // Fully filled star
              : rating > index
                ? Math.round((rating - index) * 10) // Partially filled star
                : 0;

          return (
            <Styled.RatingIcon key={`rating-start-${index}`}>
              <Star clipValue={clip} />
            </Styled.RatingIcon>
          );
        })}
      </Styled.RatingWrapper>
    </Styled.RatingWrapper>
  );
};
