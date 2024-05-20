import { useSettingsContext } from "@app/hooks";
import { StyledHeading } from "./Heading.styles";
import React from "react";

export type HeadingProps = {
  text: string;
};

export const Heading = ({ text }: HeadingProps) => {
  const { font } = useSettingsContext() ?? {};

  return (
    <StyledHeading
      color={font?.["heading"]?.color.hex}
      fontFamily={font?.["heading"]?.fontFamily}
      fontSize={font?.["heading"]?.fontSize}
    >
      {text}
    </StyledHeading>
  );
};
