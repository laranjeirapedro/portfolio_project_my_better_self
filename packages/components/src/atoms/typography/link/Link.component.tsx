import { StyledLink } from "./Link.styles";

import { useSettingsContext } from "@app/hooks";

export type LinkProps = {
  linkText: string;
  path: { current: string };
  styleOverride?: React.CSSProperties;
};

export const Link = (data: LinkProps) => {
  const { fonts } = useSettingsContext() ?? {};
  const { path, linkText, styleOverride } = data;

  console.log("LINK", data);
  return (
    <StyledLink
      href={path.current}
      color={fonts?.["link"]?.color.hex}
      fontFamily={fonts?.["link"]?.fontFamily}
      fontSize={fonts?.["link"]?.fontSize}
      style={styleOverride}
    >
      {linkText}
    </StyledLink>
  );
};
