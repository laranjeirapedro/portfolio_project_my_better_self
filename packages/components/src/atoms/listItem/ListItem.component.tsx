import React from "react";

import { StyledListItem } from "./ListItem.styles";

type Props = {
  children: React.ReactNode;
  type?: "disc" | "number";
};

export const ListItem = ({ children, type = "disc" }: Props) => {
  return (
    <StyledListItem style={{ listStyleType: type }}>{children}</StyledListItem>
  );
};
