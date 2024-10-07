import React from "react";
import { useSettingsContext } from "@app/hooks";
import { StyledListItem } from "./ListItem.styles";

type Props = {
  children: React.ReactNode;
  type?: "disc" | "number";
};

export const ListItem = ({ children, type = "disc" }: Props) => {
  const { fonts } = useSettingsContext() ?? {};
  return (
    <StyledListItem
      fontFamily={fonts?.["paragraph"]?.fontFamily}
      style={{ listStyleType: type }}
    >
      {children}
    </StyledListItem>
  );
};
