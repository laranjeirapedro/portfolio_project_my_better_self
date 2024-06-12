import React from "react";
import { ImageWraper, NextImage } from "./Image.styles";

export const Image = ({ data }: any) => {
  const { url, filename } = data.image;

  return (
    <ImageWraper
      style={{ height: data.height }}
      $height={data.height}
      $width={data.width}
    >
      <NextImage src={url} alt={filename} fill />
    </ImageWraper>
  );
};
