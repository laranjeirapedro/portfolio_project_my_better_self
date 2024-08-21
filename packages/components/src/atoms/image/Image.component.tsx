import React from "react";
import { ImageWraper, NextImage } from "./Image.styles";

export const Image = ({ data }: any) => {
  const { url, originalFilename } = data.image;

  return (
    <ImageWraper
      style={{ height: data.height }}
      $height={data.height}
      $width={data.width}
    >
      <NextImage src={url} alt={originalFilename} fill priority />
    </ImageWraper>
  );
};
