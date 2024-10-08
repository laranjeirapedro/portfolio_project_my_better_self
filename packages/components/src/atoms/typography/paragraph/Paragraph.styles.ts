import {
  colors,
  spacing,
  fontSize as _fontSize,
  breakpoints,
} from "@app/styles";
import styled from "@emotion/styled";

export const StyledParagraph = styled.p<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: "center" | "left" | "right";
  numberOfLines?: number;
}>(({ color, fontFamily, fontSize, textAlign, numberOfLines }) => ({
  fontSize: fontSize ?? _fontSize.m,
  color: color ?? colors.darkGrey[900],
  ...(fontFamily && { fontFamily }),
  textAlign,
  lineHeight: `${(fontSize ?? _fontSize.m) + spacing.xxs}px`,
  minHeight: `${(fontSize ?? _fontSize.m) + spacing.xxs}px`,
  ...(numberOfLines && {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: numberOfLines,
    maxHeight: `calc(1.2em * ${numberOfLines})`,
    lineHeight: "1.2em",
  }),
  [`@media (max-width: ${breakpoints.tablet}px)`]: {
    fontSize: fontSize ? fontSize - 2 : _fontSize.s,
  },
}));
