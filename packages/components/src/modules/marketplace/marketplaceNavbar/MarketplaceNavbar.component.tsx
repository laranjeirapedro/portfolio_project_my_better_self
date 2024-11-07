import React, { useState } from "react";
import * as Styled from "./MarketplaceNavbar.styles";

export type MarketplaceNavbarProps = {
  onSubmit: (props: any) => Promise<void>;
  error: string;
  handleEmailChanged: (value: string) => void;
  handlePasswordChanged: (value: string) => void;
};

export const MarketplaceNavbar = () => {
  

  return (
    <Styled.NavbarContainer>
    </Styled.NavbarContainer>
  );
};
