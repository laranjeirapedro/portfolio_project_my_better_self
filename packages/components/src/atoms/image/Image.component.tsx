import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { useMemo } from "react";
import { ImageWraper, NextImage } from "./Image.styles";

export const Image = ({
  data = { width: 200, height: 200, image: { url: "", originalFilename: "" } },
  objectFit = "cover",
}: {
  data: {
    image: {
      url: string | StaticImport;
      originalFilename: string;
    };
    height?: number | string;
    width?: number;
    borderRadius?: string;
  };
  objectFit?: "cover" | "contain";
}) => {
  const { url, originalFilename } = useMemo(() => data.image ?? {}, [data]);

  const isValidUrl = useMemo(() => {
    try {
      return Boolean(new URL(url as string));
    } catch {
      return false;
    }
  }, [url]);

  if (!url || !isValidUrl) return null;
  return (
    <ImageWraper style={{ height: data.height }} $width={data.width}>
      <NextImage
        borderradius={data.borderRadius}
        src={url}
        alt={originalFilename}
        fill
        sizes={JSON.stringify({
          width: data.width,
          height: data.height,
        })}
        objectFit={objectFit}
        quality={75}
        placeholder="blur"
        blurDataURL={`${url}?q=10`}
      />
    </ImageWraper>
  );
};
