import { useSettingsContext } from "@app/hooks";
import { StyledParagraph } from "./Paragraph.styles";
import React from "react";
import { CSSObject } from "@emotion/styled";

export type ParagraphProps = {
  text: string | string[];
  style?: CSSObject;
  color?: string;
  className?: string;
  numberOfLines?: number;
  textAlign?: "center" | "left" | "right";
};

export const Paragraph = ({
  text,
  style,
  color,
  className,
  textAlign = "left",
  numberOfLines,
}: ParagraphProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledParagraph
      color={color ?? fonts?.["paragraph"]?.color.hex}
      fontFamily={fonts?.["paragraph"]?.fontFamily}
      fontSize={fonts?.["paragraph"]?.fontSize}
      style={style as never}
      className={className}
      textAlign={textAlign}
      numberOfLines={numberOfLines}
    >
      {text}
    </StyledParagraph>
  );
};
