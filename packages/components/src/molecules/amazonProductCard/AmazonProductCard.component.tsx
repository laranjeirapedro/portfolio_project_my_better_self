import React, { useCallback } from "react";
import * as Styled from "./AmazonProductCard.styles";
import { Image, SubHeading } from "../..";
import { Star } from "./Star";
import { useRouter } from "next/router";

export type AmazonProductCardProps = {
  title: string;
  image: { url: string };
  rating: number;
  siteStripeUrl: string;
  price: number;
  updatedAt: string;
};

export const AmazonProductCard = (data: AmazonProductCardProps) => {
  const { title, image, rating, siteStripeUrl, price, updatedAt } = data;

  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push(siteStripeUrl);
  }, []);

  return (
    <Styled.CardContainer>
      <Styled.CardWrapper>
        <Styled.ImageWrapper>
          <Image
            data={{
              image: {
                url: image.url,
                originalFilename: title,
              },
              height: 200,
              width: 400,
            }}
            objectFit="contain"
          />
        </Styled.ImageWrapper>
        <Styled.ContentWrapper>
          <SubHeading text={title} numberOfLines={2} />
          <Styled.RatingWrapper>
            {Array.from({ length: 5 }).map((_, index) => {
              const clip =
                rating > index + 1 ? 10 : Math.ceil((rating % index) * 10);

              return (
                <Styled.RatingIcon key={`rating-start-${index}`}>
                  <Star clipValue={clip} />
                </Styled.RatingIcon>
              );
            })}
          </Styled.RatingWrapper>
          <Styled.PriceWrapper>
            <Styled.PriceSup text={"$"} />
            <SubHeading text={`${Math.floor(price)}`} />
            <Styled.PriceSup
              text={`${(price % Math.floor(price)).toFixed(2).substring(2, 4)}`}
            />
          </Styled.PriceWrapper>
          <Styled.AmazonButton onClick={onButtonClick}>
            <span>Visit</span>
          </Styled.AmazonButton>
        </Styled.ContentWrapper>
      </Styled.CardWrapper>
    </Styled.CardContainer>
  );
};
