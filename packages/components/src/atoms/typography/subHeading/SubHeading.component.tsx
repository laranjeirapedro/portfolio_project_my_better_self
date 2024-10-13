import { useSettingsContext } from "@app/hooks";
import { StyledSubHeading } from "./SubHeading.styles";
import React from "react";

export type SubHeadingProps = {
  text: string | string[];
  color?: string;
  className?: string;
  textAlign?: "center" | "left" | "right";
  numberOfLines?: number;
};

export const SubHeading = ({
  text,
  color,
  className,
  textAlign,
  numberOfLines,
}: SubHeadingProps) => {
  const { fonts } = useSettingsContext() ?? {};

  return (
    <StyledSubHeading
      color={color ?? fonts?.["fontSubHeading"]?.color.hex}
      fontFamily={fonts?.["fontSubHeading"]?.fontFamily}
      fontSize={fonts?.["fontSubHeading"]?.fontSize}
      textAlign={textAlign}
      className={className}
      numberOfLines={numberOfLines}
    >
      {text}
    </StyledSubHeading>
  );
};
