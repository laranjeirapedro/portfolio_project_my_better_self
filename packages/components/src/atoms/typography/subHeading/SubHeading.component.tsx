import { useSettingsContext } from "@app/hooks";
import { StyledSubHeading } from "./SubHeading.styles";
import React from "react";

export type SubHeadingProps = {
  text: string | string[];
  color?: string;
  className?: string;
  textAlign?: "center" | "left" | "right";
};

export const SubHeading = ({ text }: SubHeadingProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledSubHeading
      color={fonts?.["fontSubHeading"]?.color.hex}
      fontFamily={fonts?.["fontSubHeading"]?.fontFamily}
      fontSize={fonts?.["fontSubHeading"]?.fontSize}
    >
      {text}
    </StyledSubHeading>
  );
};
