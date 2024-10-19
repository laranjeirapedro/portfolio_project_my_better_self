import React, { useCallback } from "react";
import * as Styled from "./AmazonProductCard.styles";
import { Image, SubHeading } from "../..";
import { Star } from "./Star";
import { amazonProductClickedAnalytics } from "@app/hooks";
import { useRouter } from "next/router";

export type AmazonProductCardProps = {
  title: string;
  image: { url: string };
  rating: number;
  siteStripeUrl: string;
  price: number;
  _updatedAt: string;
  promoPrice?: number;
  promoDueDate?: string;
};

export const AmazonProductCard = (data: AmazonProductCardProps) => {
  const {
    title,
    image,
    rating,
    siteStripeUrl,
    price,
    _updatedAt,
    promoDueDate,
    promoPrice,
  } = data;

  const shouldSeePromo =
    promoPrice && promoDueDate && new Date(promoDueDate) >= new Date();

  const currentPrice = shouldSeePromo ? promoPrice : price;

  const router = useRouter();

  const onButtonClick = useCallback(() => {
    window.open(siteStripeUrl);
    amazonProductClickedAnalytics({
      origin: router.asPath,
      path: siteStripeUrl,
      title,
    });
  }, [router, siteStripeUrl, title]);

  return (
    <Styled.CardContainer>
      <Styled.CardWrapper>
        <Styled.ImageWrapper>
          <Image
            data={{
              image: {
                url: image.url + "?h=200",
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
            <SubHeading text={`${Math.floor(currentPrice)}`} />
            <Styled.PriceSup
              text={`${(currentPrice % Math.floor(currentPrice)).toFixed(2).substring(2, 4)}`}
            />
            {shouldSeePromo && (
              <>
                <Styled.OriginalPriceText text={`Typical Price:`} />
                <Styled.OriginalPrice text={`$${price}`} />
              </>
            )}
          </Styled.PriceWrapper>
          <a
            href={siteStripeUrl}
            target="_blank"
            onClick={onButtonClick}
            style={{ textDecoration: "none" }}
          >
            <Styled.AmazonButton>
              <span>Visit</span>
            </Styled.AmazonButton>
          </a>
          <Styled.OriginalPriceText
            text={`Updated At: ${new Date(_updatedAt).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })}`}
          />
        </Styled.ContentWrapper>
      </Styled.CardWrapper>
    </Styled.CardContainer>
  );
};
