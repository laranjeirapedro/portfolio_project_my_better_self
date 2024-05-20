import { useSettingsContext } from "@app/hooks";
import { StyledSubHeading } from "./SubHeading.styles";
import React from "react";

export type SubHeadingProps = {
  text: string;
};

export const SubHeading = ({ text }: SubHeadingProps) => {
  const { font } = useSettingsContext() ?? {};

  return (
    <StyledSubHeading
      color={font?.["subHeading"]?.color.hex}
      fontFamily={font?.["subHeading"]?.fontFamily}
      fontSize={font?.["subHeading"]?.fontSize}
    >
      {text}
    </StyledSubHeading>
  );
};
