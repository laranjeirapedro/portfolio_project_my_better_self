import { useSettingsContext } from "@app/hooks";
import { StyledCaption } from "./Caption.styles";
import React from "react";

export type CaptionProps = {
  text: string;
  className?: string;
};

export const Caption = ({ text, className }: CaptionProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledCaption
      color={fonts?.["caption"]?.color.hex}
      fontFamily={fonts?.["caption"]?.fontFamily}
      fontSize={fonts?.["caption"]?.fontSize}
      className={className}
    >
      {text}
    </StyledCaption>
  );
};
