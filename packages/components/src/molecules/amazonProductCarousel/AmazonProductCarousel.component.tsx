import { breakpoints } from "@app/styles";
import React from "react";

import Slider, { Settings as SliderSettings } from "react-slick";

import {
  AmazonProductCard,
  AmazonProductCardProps,
} from "../amazonProductCard";

export const AmazonProductCarousel = ({
  products = [],
}: {
  products: AmazonProductCardProps[];
}) => {
  const settings: SliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    slidesToShow: 2,
    speed: 500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: breakpoints.desktop,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: breakpoints.tablet,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: breakpoints.mobile,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
    arrows: false,
  };

  if (products?.length === 0) return null;

  return (
    <div style={{ boxSizing: "border-box", margin: 30, padding: 0 }}>
      <Slider {...settings}>
        {products?.map((item) => (
          <div>
            <div style={{ padding: "0px 6px" }}>
              <AmazonProductCard {...item} mobile />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
