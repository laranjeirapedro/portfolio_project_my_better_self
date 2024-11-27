import { amazonProductClickedAnalytics, trackEvent } from "@app/hooks";
import { Category, EVENT_NAMES, ProductEvent } from "@app/types";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { Image, Rating, SubHeading } from "../..";
import * as Styled from "./AmazonProductCard.styles";

export type AmazonProductCardProps = {
  title: string;
  image: { url: string };
  rating: number;
  siteStripeUrl: string;
  price: number;
  _updatedAt: string;
  promoPrice?: number;
  promoDueDate?: string;
  mobile?: boolean;
  category?: Category;
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
    mobile = false,
    category,
  } = data;

  const shouldSeePromo =
    promoPrice && promoDueDate && new Date(promoDueDate) >= new Date();

  const currentPrice = shouldSeePromo ? promoPrice : price;

  const router = useRouter();

  const onButtonClick = useCallback(() => {
    trackEvent<ProductEvent>({
      eventName: EVENT_NAMES.PRODUCT_CLICKED,
      eventProperties: {
        screenPath: router.asPath,
        path: siteStripeUrl,
        title,
      },
    });

    amazonProductClickedAnalytics({
      origin: router.asPath,
      path: siteStripeUrl,
      title,
    });
  }, [router, siteStripeUrl, title]);

  return (
    <Styled.CardContainer mobile={mobile}>
      <Styled.CardWrapper mobile={mobile}>
        <Styled.ImageWrapper mobile={mobile}>
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
        <Styled.ContentWrapper mobile={mobile}>
          <SubHeading text={title} numberOfLines={2} />
          <Rating rating={rating} />
          <Styled.PriceWrapper>
            <Styled.PriceSup text={"$"} />
            <SubHeading text={`${Math.floor(currentPrice)}`} />
            <Styled.PriceSup
              text={`${((currentPrice * 100) % 100).toFixed(0).padStart(2, "0")}`}
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
            style={{ textDecoration: "none", width: "fit-content" }}
          >
            <Styled.AmazonButton>
              <span>Visit</span>
            </Styled.AmazonButton>
          </a>
          <Styled.UpdatedDateText
            text={`Updated At: ${new Date(_updatedAt).toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" })}`}
          />
        </Styled.ContentWrapper>
      </Styled.CardWrapper>
    </Styled.CardContainer>
  );
};
