import styled from "styled-components";

export const StyledSubHeading = styled.p<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
}>(({ color, fontFamily, fontSize }) => ({
  // TODO: use fontSize from packages/styles (TBD)
  fontSize: fontSize ?? 22,
  // TODO: use COLORS.BLACK from packages/styles (TBD)
  color: color ?? "#000000",
  ...(fontFamily && { fontFamily }),
}));
