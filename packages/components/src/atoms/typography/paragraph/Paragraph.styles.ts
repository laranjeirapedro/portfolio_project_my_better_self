import styled from "@emotion/styled";

export const StyledParagraph = styled.p<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: "center" | "left" | "right";
  numberOfLines?: number;
}>(({ color, fontFamily, fontSize, textAlign, numberOfLines }) => ({
  // TODO: use fontSize from packages/styles (TBD)
  fontSize: fontSize ?? 16,
  // TODO: use COLORS.BLACK from packages/styles (TBD)
  color: color ?? "#000000",
  ...(fontFamily && { fontFamily }),
  textAlign,
  ...(numberOfLines && {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: numberOfLines,
    maxHeight: `calc(1.2em * ${numberOfLines})`,
    lineHeight: "1.2em",
  }),
}));
