import React from "react";

import { LinkProps } from "../../atoms";

import { Header as LHeader } from "./layouts";
export type HeaderProps = {
  logo: any;
  siteName: string;
  commonLinks: LinkProps[];
  authenticatedLinks: LinkProps[];
  unauthenticatedLinks: LinkProps[];
};

export const Header = (data: HeaderProps) => {
  return (
    <React.Fragment>
      <LHeader.Mobile {...data} />
      <LHeader.Desktop {...data} />
    </React.Fragment>
  );
};
