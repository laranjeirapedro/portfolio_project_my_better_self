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
  RightLinksContainer,
  MenuList,
  MenuWrapper,
} from "./Header.desktop.styles";
import { Link, LinkProps, Spacer, Image } from "../../../../atoms";
import { FaBars, FaTimes } from "react-icons/fa";
import { spacing } from "@app/styles";

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
    <HeaderContainer>
      <ContentContainer>
        <TopBarContainer>
          <LeftLinksContainer>
            <LoginLink>
              {loginLinks.length > 0 &&
                loginLinks.map((link, index) => (
                  <React.Fragment key={`${link.path.current}-${index}`}>
                    {index !== 0 && <Spacer width={spacing.s} />}
                    <Link {...link} />
                  </React.Fragment>
                ))}
            </LoginLink>
          </LeftLinksContainer>
          <LogoContainer onClick={onLogoClick}>
            <Image
              data={{
                ...logo.asset,
                image: { ...logo.asset },
                width: 120,
                height: 60,
              }}
            />
          </LogoContainer>
          <RightLinksContainer>
            {/* Should this be a search text input instead? */}
            {/* <SearchButton>Find a blog</SearchButton> */}
            <MenuWrapper onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </MenuWrapper>
            {isOpen && (
              // TODO: Get this from CMS using actual links
              // TODO: This menu is too simple, we should revisit this design, maybe reuse the mobile menu
              <MenuList>
                <div>Home</div>
                <div>About</div>
                <div>Blog</div>
              </MenuList>
            )}
          </RightLinksContainer>
        </TopBarContainer>
        <LinksContainer>
          {selectedLinks.length > 0 &&
            selectedLinks.map((link, index) => (
              <React.Fragment key={`${link.path.current}-${index}`}>
                {index !== 0 && <Spacer width={spacing.s} />}
                <Link {...link} />
              </React.Fragment>
            ))}
        </LinksContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};
