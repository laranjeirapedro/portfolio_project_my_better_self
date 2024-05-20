import styled from "styled-components";

// TODO: fix the issue where we cant use Link from next/link
export const StyledLink = styled.a<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
}>(({ color, fontFamily, fontSize }) => ({
  // TODO: use fontSize from packages/styles (TBD)
  fontSize: fontSize ?? 16,
  // TODO: use COLORS.BLACK from packages/styles (TBD)
  color: color ?? "#000000",
  ...(fontFamily && { fontFamily }),
}));
