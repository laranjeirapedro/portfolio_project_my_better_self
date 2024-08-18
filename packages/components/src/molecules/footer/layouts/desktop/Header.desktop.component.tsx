import React, { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import {
  HeaderContainer,
  ContentContainer,
  TopBarContainer,
  LeftLinksContainer,
  LinksContainer,
  LoginLink,
  LogoContainer,
  SubscribeLink,
  LinkWrapper,
  RightLinksContainer,
  SearchButton,
  MenuList,
} from "./Header.desktop.styles";
import { Link, LinkProps } from "../../../../atoms";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

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

  const selectedLinks = useMemo(() => [...commonLinks], []);

  const loginLinks = useMemo(
    () => [...(isAuth ? authenticatedLinks : unauthenticatedLinks)],
    []
  );

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer id={siteName}>
      <ContentContainer id="ContentContainer">
        <TopBarContainer id="TopBarContainer">
          <LeftLinksContainer id="LeftLinksContainer">
            <SubscribeLink id="SubscribeLink">
              <a>Subscribe</a>
            </SubscribeLink>
            <LoginLink id="LoginLink">
              {loginLinks.length > 0 &&
                loginLinks.map((link, index) => (
                  <LinkWrapper
                    key={`${link.path.current}-${index}`}
                    id="LinkWrapper"
                  >
                    <Link {...link} />
                  </LinkWrapper>
                ))}
            </LoginLink>
          </LeftLinksContainer>
          <LogoContainer onClick={onLogoClick} id="LogoContainer">
            <Image
              src={logo.asset.url}
              alt={logo.asset.originalFilename}
              width={120}
              height={120}
              style={{ objectFit: "contain" }}
              id="Image"
            />
          </LogoContainer>
          <RightLinksContainer>
            <SearchButton id="SubscribeLink">Find a blog</SearchButton>
            <div onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
            {isOpen && (
              <MenuList>
                  <div>Home</div>
                  <div>About</div>
                  <div>Blog</div>
              </MenuList>
            )}
          </RightLinksContainer>
        </TopBarContainer>
        <LinksContainer id="LinksContainer">
          {selectedLinks.length > 0 &&
            selectedLinks.map((link, index) => (
              <LinkWrapper
                key={`${link.path.current}-${index}`}
                id="LinkWrapper"
              >
                <Link {...link} />
              </LinkWrapper>
            ))}
        </LinksContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};
