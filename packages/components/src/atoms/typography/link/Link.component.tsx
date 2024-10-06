import { StyledLink } from "./Link.styles";
import React from "react";

import { useSettingsContext } from "@app/hooks";

export type LinkProps = {
  linkText?: string;
  children?: string | React.ReactNode;
  path: { current: string };
  styleOverride?: React.CSSProperties;
  className?: string;
};

export const Link = (data: LinkProps) => {
  const { fonts } = useSettingsContext() ?? {};
  const { path, linkText, styleOverride, className } = data;
  return (
    <StyledLink
      href={path.current ?? "#"}
      color={fonts?.["link"]?.color?.hex}
      fontFamily={fonts?.["link"]?.fontFamily}
      fontSize={fonts?.["link"]?.fontSize}
      style={styleOverride}
      className={className}
    >
      {data.children ?? linkText ?? ""}
    </StyledLink>
  );
};
