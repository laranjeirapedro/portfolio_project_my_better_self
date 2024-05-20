import { useSettingsContext } from "@app/hooks";
import { StyledCaption } from "./Caption.styles";
import React from "react";

export type CaptionProps = {
  text: string;
};

export const Caption = ({ text }: CaptionProps) => {
  const { font } = useSettingsContext() ?? {};

  return (
    <StyledCaption
      color={font?.["caption"]?.color.hex}
      fontFamily={font?.["caption"]?.fontFamily}
      fontSize={font?.["caption"]?.fontSize}
    >
      {text}
    </StyledCaption>
  );
};
