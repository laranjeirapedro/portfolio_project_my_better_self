import { LinkProps } from "../../atoms";

export type HeaderProps = {
  logo: any;
  siteName: string;
  commonLinks: LinkProps[];
  authenticatedLinks: LinkProps[];
  unauthenticatedLinks: LinkProps[];
  isAuth?: boolean;
  authSwitch?: boolean;
  headerType?: "typeA" | "typeB";
};
