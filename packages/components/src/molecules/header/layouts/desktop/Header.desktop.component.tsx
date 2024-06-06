import React, { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import {
  HeaderContainer,
  ContentContainer,
  LinksContainer,
  LogoContainer,
  LinkWrapper,
} from "./Header.desktop.styles";
import { Link, LinkProps } from "../../../../atoms";
import Image from "next/image";

export type HeaderProps = {
  logo: any;
  siteName: string;
  commonLinks: LinkProps[];
  authenticatedLinks: LinkProps[];
  unauthenticatedLinks: LinkProps[];
};

export const HeaderDesktop = (data: HeaderProps) => {
  const {
    logo,
    siteName,
    commonLinks = [],
    authenticatedLinks = [],
    unauthenticatedLinks = [],
  } = data;

  const router = useRouter();

  // TODO: replace this with authentication logic when implemented
  const isAuth = false;

  const selectedLinks = useMemo(
    () => [
      ...commonLinks,
      ...(isAuth ? authenticatedLinks : unauthenticatedLinks),
    ],
    [],
  );

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <HeaderContainer id={siteName}>
      <ContentContainer>
        <LogoContainer onClick={onLogoClick}>
          <Image
            src={logo.asset.url}
            alt={logo.asset.originalFilename}
            fill
            style={{ objectFit: "contain" }}
          />
        </LogoContainer>
        <LinksContainer>
          {selectedLinks.length > 0 &&
            selectedLinks.map((link) => (
              <LinkWrapper key={link.path.current}>
                <Link {...link} />
              </LinkWrapper>
            ))}
        </LinksContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};
