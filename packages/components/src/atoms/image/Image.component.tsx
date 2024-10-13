import React, { useMemo } from "react";
import { ImageWraper, NextImage } from "./Image.styles";

export const Image = ({
  data = { width: 200, height: 200, image: { url: "", originalFilename: "" } },
  objectFit = "cover",
}: {
  data: {
    image: {
      url: string;
      originalFilename: string;
    };
    height?: number;
    width?: number;
    borderRadius?: string;
  };
  objectFit?: "cover" | "contain";
}) => {
  const { url, originalFilename } = useMemo(() => data.image, [data]);

  if (!url) return null;

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
