import {
  colors,
  fontSize as _fontSize,
  spacing,
  breakpoints,
} from "@app/styles";
import styled from "@emotion/styled";

export const StyledHeading = styled.p<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: "center" | "left" | "right";
}>(({ color, fontFamily, fontSize, textAlign }) => ({
  fontSize: fontSize ?? _fontSize.xl,
  color: color ?? colors.darkGrey[900],
  lineHeight: `${(fontSize ?? _fontSize.xl) + spacing.xxs}px`,
  minHeight: `${(fontSize ?? _fontSize.xl) + spacing.xxs}px`,
  margin: `${spacing.xxs}px 0px`,
  ...(fontFamily && { fontFamily }),
  textAlign,
  [`@media (max-width: ${breakpoints.tablet}px)`]: {
    fontSize: fontSize ? fontSize - 4 : _fontSize.l,
  },
}));
