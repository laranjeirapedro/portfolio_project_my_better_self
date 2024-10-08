import { breakpoints, fontSize as _fontSize, colors } from "@app/styles";
import styled from "@emotion/styled";
import Link from "next/link";

// TODO: fix the issue where we cant use Link from next/link
export const StyledLink = styled(Link)<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
}>(({ color, fontFamily, fontSize }) => ({
  // TODO: use fallback fontSize from packages/styles (TBD)
  fontSize: fontSize ?? _fontSize.m,
  // TODO: use fallback COLORS.BLACK from packages/styles (TBD)
  color: color ?? colors.darkGrey[900],
  ...(fontFamily && { fontFamily }),
  [`@media (max-width: ${breakpoints.tablet}px)`]: {
    fontSize: fontSize ? fontSize - 2 : _fontSize.s,
  },
}));
