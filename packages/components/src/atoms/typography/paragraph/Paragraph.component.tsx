import { useSettingsContext } from "@app/hooks";
import { StyledParagraph } from "./Paragraph.styles";
import React from "react";
import { CSSObject } from "@emotion/styled";

export type ParagraphProps = {
  text: string;
  style?: CSSObject;
  color?: string;
  className?: string;
};

export const Paragraph = ({
  text,
  style,
  color,
  className,
}: ParagraphProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledParagraph
      color={color ?? fonts?.["paragraph"]?.color.hex}
      fontFamily={fonts?.["paragraph"]?.fontFamily}
      fontSize={fonts?.["paragraph"]?.fontSize}
      style={style as never}
      className={className}
    >
      {text}
    </StyledParagraph>
  );
};
