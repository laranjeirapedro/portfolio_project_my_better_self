import React, { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import {
  HeaderContainer,
  ContentContainer,
  TopBarContainer,
  LeftLinksContainer,
  LinksContainer,
  LoginLink,
  CommonLinks,
  LogoContainer,
  Divider,
  RightLinksContainer,
  MenuList,
  MenuWrapper,
  IconWrapper,
  Overlay,
} from "./HeaderTypeA.desktop.styles";
import { Link, Spacer, Image } from "../../../../../atoms";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { spacing } from "@app/styles";
import { HeaderProps } from "../../../Header.types";

export const HeaderTypeADesktop = (data: HeaderProps) => {
  const {
    logo,
    commonLinks = [],
    authenticatedLinks = [],
    unauthenticatedLinks = [],
    isAuth = false,
    authSwitch = false,
  } = useMemo(() => data, [data]);

  const router = useRouter();

  const selectedLinks = useMemo(() => [...commonLinks], []);

  const loginLinks = useMemo(
    () => [...(isAuth ? authenticatedLinks : unauthenticatedLinks)],
    [authenticatedLinks, isAuth, unauthenticatedLinks]
  );

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
      <ContentContainer>
        <TopBarContainer>
          <LeftLinksContainer>
            <LogoContainer onClick={onLogoClick}>
              <Image
                data={{
                  ...logo.asset,
                  image: { ...logo.asset },
                  width: 130,
                  height: 60,
                }}
                objectFit="contain"
              />
            </LogoContainer>
          </LeftLinksContainer>

          <RightLinksContainer>
            {/* Should this be a search text input instead? */}
            {/* <SearchButton>Find a blog</SearchButton> */}
            <MenuWrapper onClick={toggleMenu}>
              <IconWrapper isOpen={isOpen}>
                {isOpen ? (
                  <FaUserCircle size={32} />
                ) : (
                  <FaRegUserCircle size={32} />
                )}
              </IconWrapper>
            </MenuWrapper>
            {isOpen && (
              // TODO: This menu is too simple, we should revisit this design, maybe reuse the mobile menu
              <MenuList>
                <LinksContainer onClick={() => setIsOpen(false)}>
                  <CommonLinks>
                    {selectedLinks.length > 0 &&
                      selectedLinks.map((link, index) => (
                        <React.Fragment key={`${link.path.current}-${index}`}>
                          {index !== 0 && <Spacer width={spacing.s} />}
                          <Link {...link} />
                        </React.Fragment>
                      ))}
                  </CommonLinks>
                  {authSwitch && (
                    <>
                      <Divider />
                      <LoginLink>
                        {loginLinks.length > 0 &&
                          loginLinks.map((link, index) => (
                            <React.Fragment
                              key={`${link.path.current}-${index}`}
                            >
                              {index !== 0 && <Spacer width={spacing.s} />}
                              <Link {...link} />
                            </React.Fragment>
                          ))}
                      </LoginLink>
                    </>
                  )}
                </LinksContainer>
              </MenuList>
            )}
          </RightLinksContainer>
        </TopBarContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};
