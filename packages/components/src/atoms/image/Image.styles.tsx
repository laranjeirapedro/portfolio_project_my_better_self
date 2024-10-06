import Image from "next/image";
import styled from "@emotion/styled";

export const ImageWraper = styled.div<{ $height?: number; $width?: number }>`
  position: relative;
  width: ${({ $width }) => ($width ? `${$width}px` : "auto")};
  height: ${({ $height = 100 }) => $height}px;
`;

export const NextImage = styled(Image)<{
  borderradius?: string;
  objectFit: "cover" | "contain";
}>`
  position: center;
  // TODO: Add property to cms
  object-fit: ${({ objectFit }) => objectFit};
  border-radius: ${({ borderradius }) => borderradius};
`;
