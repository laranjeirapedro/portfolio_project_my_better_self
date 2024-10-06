import React from "react";
import { ImageWraper, NextImage } from "./Image.styles";

export const Image = ({
  data,
  objectFit = "cover",
}: {
  data: any;
  objectFit?: "cover" | "contain";
}) => {
  const { url, originalFilename } = data.image;

  return (
    <ImageWraper
      style={{ height: data.height }}
      $height={data.height}
      $width={data.width}
    >
      <NextImage
        borderradius={data.borderRadius}
        src={url}
        alt={originalFilename}
        fill
        priority
        sizes={JSON.stringify({
          width: data.width,
          height: data.height,
        })}
        objectFit={objectFit}
      />
    </ImageWraper>
  );
};
