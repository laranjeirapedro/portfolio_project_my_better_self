import React from "react";

import { colors, spacing, fontSize as _fontSize } from "@app/styles";
import styled from "@emotion/styled";

export const StyledListItem = styled.li<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  numberOfLines?: number;
}>(({ color, fontFamily, fontSize, numberOfLines }) => ({
  fontSize: fontSize ?? _fontSize.m,
  color: color ?? colors.darkGrey[900],
  ...(fontFamily && { fontFamily }),
  lineHeight: `${(fontSize ?? _fontSize.m) + spacing.xxs}px`,
  minHeight: `${(fontSize ?? _fontSize.m) + spacing.xxs}px`,
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
