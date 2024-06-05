import { useSettingsContext } from "@app/hooks";
import { StyledParagraph } from "./Paragraph.styles";
import React from "react";

export type ParagraphProps = {
  text: string;
};

export const Paragraph = ({ text }: ParagraphProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledParagraph
      color={fonts?.["paragraph"]?.color.hex}
      fontFamily={fonts?.["paragraph"]?.fontFamily}
      fontSize={fonts?.["paragraph"]?.fontSize}
    >
      {text}
    </StyledParagraph>
  );
};
