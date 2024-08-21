import { useSettingsContext } from "@app/hooks";
import { StyledHeading } from "./Heading.styles";
import React from "react";

export type HeadingProps = {
  text: string;
};

export const Heading = ({ text }: HeadingProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledHeading
      color={fonts?.["fontHeading"]?.color.hex}
      fontFamily={fonts?.["fontHeading"]?.fontFamily}
      fontSize={fonts?.["fontHeading"]?.fontSize}
    >
      {text}
    </StyledHeading>
  );
};
