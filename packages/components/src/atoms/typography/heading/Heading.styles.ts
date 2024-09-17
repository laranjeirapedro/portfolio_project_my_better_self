import styled from "@emotion/styled";

export const StyledHeading = styled.p<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: "center" | "left" | "right";
}>(({ color, fontFamily, fontSize, textAlign }) => ({
  // TODO: use fallback fontSize from packages/styles (TBD)
  fontSize: fontSize ?? 26,
  // TODO: use fallback COLORS.BLACK from packages/styles (TBD)
  color: color ?? "#000000",
  ...(fontFamily && { fontFamily }),
  textAlign,
}));
