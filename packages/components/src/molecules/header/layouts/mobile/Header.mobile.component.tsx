import React, { useCallback, useMemo, useState } from "react";
import {
  HeaderContainer,
  ContentContainer,
  LinksContainer,
  LogoContainer,
  LinkWrapper,
  IconContainer,
  MenuContainer,
  MenuIconContainer,
} from "./Header.mobile.styles";
import { Link, SubHeading } from "../../../../atoms";
import { useRouter } from "next/router";
import Image from "next/image";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { fontSize } from "@app/styles";
import { HeaderProps } from "../../Header.types";

// TODO: get from cms
const MENU_WIDTH = 300;

export const HeaderMobile = (data: HeaderProps) => {
  const {
    logo,
    commonLinks = [],
    authenticatedLinks = [],
    unauthenticatedLinks = [],
    isAuth = false,
    authSwitch = false,
  } = useMemo(() => data, [data]);

  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const selectedLinks = useMemo(
    () => [
      ...commonLinks,
      ...(authSwitch
        ? isAuth
          ? authenticatedLinks
          : unauthenticatedLinks
        : []),
    ],
    [isAuth, authenticatedLinks, commonLinks, unauthenticatedLinks]
  );

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const toggleMenu = useCallback(
    () => setIsActive((curr: boolean) => !curr),
    []
  );

  return (
    <HeaderContainer>
      <ContentContainer>
        <LogoContainer onClick={onLogoClick}>
          <Image
            src={logo.asset.url}
            alt={logo.asset.originalFilename}
            fill
            style={{ objectFit: "contain" }}
          />
        </LogoContainer>
        <IconContainer onClick={toggleMenu}>
          <IoMenu size={fontSize.xl} />
        </IconContainer>
      </ContentContainer>
      <MenuContainer isActive={isActive} menuWidth={MENU_WIDTH}>
        <MenuIconContainer onClick={toggleMenu}>
          <IoCloseOutline size={fontSize.xl} />
        </MenuIconContainer>
        <SubHeading text="Menu" />
        <LinksContainer>
          {selectedLinks.length > 0 &&
            selectedLinks.map((link, index) => (
              <LinkWrapper key={`mb-${link.path.current}-${index}`}>
                <Link {...link} />
              </LinkWrapper>
            ))}
        </LinksContainer>
      </MenuContainer>
    </HeaderContainer>
  );
};
