import { useSettingsContext } from "@app/hooks";
import { StyledHeading } from "./Heading.styles";
import React from "react";

export type HeadingProps = {
  text: string | string[];
  color?: string;
  className?: string;
  textAlign?: "center" | "left" | "right";
};

export const Heading = ({
  text,
  color,
  className,
  textAlign = "left",
}: HeadingProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledHeading
      color={color ?? fonts?.["fontHeading"]?.color.hex}
      fontFamily={fonts?.["fontHeading"]?.fontFamily}
      fontSize={fonts?.["fontHeading"]?.fontSize}
      className={className}
      textAlign={textAlign}
    >
      {text}
    </StyledHeading>
  );
};
