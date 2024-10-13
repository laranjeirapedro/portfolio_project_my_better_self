import {
  colors,
  fontSize as _fontSize,
  spacing,
  breakpoints,
} from "@app/styles";
import styled from "@emotion/styled";

export const StyledSubHeading = styled.p<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: "center" | "left" | "right";
  numberOfLines?: number;
}>(({ color, fontFamily, fontSize, textAlign, numberOfLines }) => ({
  fontSize: fontSize ?? _fontSize.l,
  color: color ?? colors.darkGrey[900],
  lineHeight: `${(fontSize ?? _fontSize.l) + spacing.xxs}px`,
  minHeight: `${(fontSize ?? _fontSize.l) + spacing.xxs}px`,
  margin: `${spacing.xxxs}px 0px`,
  ...(fontFamily && { fontFamily }),
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
    fontSize: fontSize ? fontSize - 2 : _fontSize.m,
  },
  textAlign,
}));
