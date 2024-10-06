import { colors, fontSize as _fontSize, spacing } from "@app/styles";
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
}));
