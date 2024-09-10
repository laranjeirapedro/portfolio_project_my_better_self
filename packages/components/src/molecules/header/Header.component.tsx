import React from "react";
import { HeaderProps } from "./Header.types";

import { Header as LHeader } from "./layouts";

export const Header = (data: HeaderProps) => {
  return (
    <React.Fragment>
      <LHeader.Mobile {...data} />
      <LHeader.Desktop {...data} />
    </React.Fragment>
  );
};
