import { useSettingsContext } from "@app/hooks";
import { StyledCaption } from "./Caption.styles";
import React from "react";

export type CaptionProps = {
  text: string;
};

export const Caption = ({ text }: CaptionProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledCaption
      color={fonts?.["caption"]?.color.hex}
      fontFamily={fonts?.["caption"]?.fontFamily}
      fontSize={fonts?.["caption"]?.fontSize}
    >
      {text}
    </StyledCaption>
  );
};
