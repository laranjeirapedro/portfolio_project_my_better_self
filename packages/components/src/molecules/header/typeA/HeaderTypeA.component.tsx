import React from "react";
import { HeaderProps } from "../Header.types";

import { HeaderTypeA as _HeaderTypeA } from "./layouts";

export const HeaderTypeA = (data: HeaderProps) => {
  return (
    <React.Fragment>
      <_HeaderTypeA.Mobile {...data} />
      <_HeaderTypeA.Desktop {...data} />
    </React.Fragment>
  );
};
