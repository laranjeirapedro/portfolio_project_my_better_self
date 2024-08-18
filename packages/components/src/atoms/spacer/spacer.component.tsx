import React from "react";
import { SpacerProps } from "./spacer.component.types";
import { Block } from "./spacer.component.styles";

export const Spacer = ({ width, height }: SpacerProps) => {
  return <Block width={width} height={height} />;
};
