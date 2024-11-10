import React, { useState } from "react";
import * as Styled from "./MarketplaceFilterSidebar.styles";

export type MarketplaceFilterSidebarProps = {
  onSubmit: (props: any) => Promise<void>;
  error: string;
  handleEmailChanged: (value: string) => void;
  handlePasswordChanged: (value: string) => void;
};

export const MarketplaceFilterSidebar = () => {
  return <Styled.SideBarContainer></Styled.SideBarContainer>;
};
