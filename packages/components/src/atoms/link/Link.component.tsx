import styled from "styled-components";
import NextLink from "next/link";

import { useSettingsContext } from "@app/hooks";

export type LinkProps = {
  linkText: string;
  path: string;
};

const _Link = styled(NextLink)<{
  color?: string;
  fontFamily?: string;
  fontSize?: number;
}>(({ color, fontFamily, fontSize }) => ({
  // TODO: use fontSize from packages/styles (TBD)
  fontSize: fontSize ?? 14,
  // TODO: use COLORS.BLACK from packages/styles (TBD)
  color: color ?? "#000000",
  ...(fontFamily && { fontFamily }),
}));

export const Link = ({ linkText, path }: LinkProps) => {
  const { font } = useSettingsContext() ?? {};

  return (
    <_Link
      href={path}
      color={font?.["link"]?.color.hex}
      fontFamily={font?.["link"]?.fontFamily}
      fontSize={font?.["link"]?.fontSize}
    >
      {linkText}
    </_Link>
  );
};
