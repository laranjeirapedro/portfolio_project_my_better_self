import { StyledLink } from "./Link.styles";

import { useSettingsContext } from "@app/hooks";

export type LinkProps = {
  linkText: string;
  path: string;
};

export const Link = ({ linkText, path }: LinkProps) => {
  const { font } = useSettingsContext() ?? {};

  return (
    <StyledLink
      href={path}
      color={font?.["link"]?.color.hex}
      fontFamily={font?.["link"]?.fontFamily}
      fontSize={font?.["link"]?.fontSize}
    >
      {linkText}
    </StyledLink>
  );
};
