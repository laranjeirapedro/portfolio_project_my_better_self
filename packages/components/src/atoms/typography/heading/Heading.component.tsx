import { useSettingsContext } from "@app/hooks";
import { StyledHeading } from "./Heading.styles";
import React from "react";

export type HeadingProps = {
  text: string;
  color?: string;
  className?: string;
};

export const Heading = ({ text, color, className }: HeadingProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledHeading
      color={color ?? fonts?.["fontHeading"]?.color.hex}
      fontFamily={fonts?.["fontHeading"]?.fontFamily}
      fontSize={fonts?.["fontHeading"]?.fontSize}
      className={className}
    >
      {text}
    </StyledHeading>
  );
};
