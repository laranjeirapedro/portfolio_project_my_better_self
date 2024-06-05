import { useSettingsContext } from "@app/hooks";
import { StyledSubHeading } from "./SubHeading.styles";
import React from "react";

export type SubHeadingProps = {
  text: string;
};

export const SubHeading = ({ text }: SubHeadingProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledSubHeading
      color={fonts?.["subHeading"]?.color.hex}
      fontFamily={fonts?.["subHeading"]?.fontFamily}
      fontSize={fonts?.["subHeading"]?.fontSize}
    >
      {text}
    </StyledSubHeading>
  );
};
