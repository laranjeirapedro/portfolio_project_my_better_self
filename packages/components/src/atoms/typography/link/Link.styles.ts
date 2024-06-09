import styled from "@emotion/styled";
import Link from "next/link";

// TODO: fix the issue where we cant use Link from next/link
export const StyledLink = styled(Link)<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
}>(({ color, fontFamily, fontSize }) => ({
  // TODO: use fallback fontSize from packages/styles (TBD)
  fontSize: fontSize ?? 16,
  // TODO: use fallback COLORS.BLACK from packages/styles (TBD)
  color: color ?? "#000000",
  ...(fontFamily && { fontFamily }),
}));
