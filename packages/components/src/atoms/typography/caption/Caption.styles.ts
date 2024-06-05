import styled from "@emotion/styled";

export const StyledCaption = styled.p<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
}>(({ color, fontFamily, fontSize }) => ({
  // TODO: use fallback fontSize from packages/styles (TBD)
  fontSize: fontSize ?? 12,
  // TODO: use fallback styles.COLORS.BLACK from packages/styles (TBD)
  color: color ?? "#000000",
  ...(fontFamily && { fontFamily }),
}));
