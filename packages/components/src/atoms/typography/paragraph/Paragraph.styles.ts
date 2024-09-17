import styled from "@emotion/styled";

export const StyledParagraph = styled.p<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: "center" | "left" | "right";
}>(({ color, fontFamily, fontSize, textAlign }) => ({
  // TODO: use fontSize from packages/styles (TBD)
  fontSize: fontSize ?? 16,
  // TODO: use COLORS.BLACK from packages/styles (TBD)
  color: color ?? "#000000",
  ...(fontFamily && { fontFamily }),
  textAlign,
}));
