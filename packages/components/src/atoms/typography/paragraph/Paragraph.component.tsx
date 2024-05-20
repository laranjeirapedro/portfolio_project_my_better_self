import { useSettingsContext } from "@app/hooks";
import { StyledParagraph } from "./Paragraph.styles";
import React from "react";

export type ParagraphProps = {
  text: string;
};

export const Paragraph = ({ text }: ParagraphProps) => {
  const { font } = useSettingsContext() ?? {};

  return (
    <StyledParagraph
      color={font?.["paragraph"]?.color.hex}
      fontFamily={font?.["paragraph"]?.fontFamily}
      fontSize={font?.["paragraph"]?.fontSize}
    >
      {text}
    </StyledParagraph>
  );
};
