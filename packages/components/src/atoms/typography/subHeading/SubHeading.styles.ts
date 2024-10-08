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
}>(({ color, fontFamily, fontSize }) => ({
  fontSize: fontSize ?? _fontSize.l,
  color: color ?? colors.darkGrey[900],
  lineHeight: `${(fontSize ?? _fontSize.l) + spacing.xxs}px`,
  minHeight: `${(fontSize ?? _fontSize.l) + spacing.xxs}px`,
  margin: `${spacing.xxxs}px 0px`,
  ...(fontFamily && { fontFamily }),
  [`@media (max-width: ${breakpoints.tablet}px)`]: {
    fontSize: fontSize ? fontSize - 2 : _fontSize.m,
  },
}));
