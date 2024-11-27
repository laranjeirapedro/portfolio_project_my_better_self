import { linkClickedAnalytics } from "@app/hooks";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Image, Spacer } from "../../../atoms";
import { HeaderProps } from "../Header.types";
import * as Styled from "./HeaderTypeB.styles";

export const HeaderTypeB = (data: HeaderProps) => {
  const {
    logo,
    commonLinks,
    // on stand by
    // authenticatedLinks,
    // unauthenticatedLinks,
    // isAuth,
    // authSwitch,
  } = useMemo(() => data, [data]);

  const [menuOpened, setMenuOpened] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("");

  const openMenu = useCallback(() => {
    setMenuOpened(true);
  }, [setMenuOpened]);

  const closeMenu = useCallback(() => {
    setMenuOpened(false);
  }, [setMenuOpened]);

  const router = useRouter();

  const onLogoClick = useCallback(() => {
    setMenuOpened(false);
    linkClickedAnalytics({ path: "/" });
    router.push("/");
  }, [router]);

  const handleRouteChange = () => {
    if (window) {
      setCurrentRoute(window.location.pathname);
    }
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
  }, [router]);

  return (
    <>
      {menuOpened && <Spacer height={80} />}
      <Styled.HeaderContainer menuOpened={menuOpened}>
        <Styled.ExpandableMenu menuOpened={menuOpened}>
          <Styled.ExpandableMenuMain>
            <Spacer height={90} />
            <Styled.Divider menuOpened={menuOpened} />
            <Spacer height={16} />
            <Styled.ExpandableMenuContent>
              <Styled.ExpandableLinksContainer>
                {commonLinks.map((link, i) => (
                  <Styled.ExpandableLinkContainer
                    menuOpened={menuOpened}
                    key={`expandable-link-${i}`}
                    onClick={closeMenu}
                  >
                    <Styled.ExpandableLink
                      {...link}
                      active={currentRoute === link.path.current}
                    />
                  </Styled.ExpandableLinkContainer>
                ))}
              </Styled.ExpandableLinksContainer>
            </Styled.ExpandableMenuContent>
          </Styled.ExpandableMenuMain>
        </Styled.ExpandableMenu>
        <Styled.MainSection>
          {/* 34 is my magical number to center align the logo, 
          if you change the burger icon size, you must change this value too */}
          <Spacer width={28} />
          <Styled.LogoWrapper onClick={onLogoClick}>
            <Image
              data={{
                image: {
                  url: logo.asset.url,
                  originalFilename: logo.asset.originalFilename,
                },
                width: 130,
                height: 52,
              }}
              objectFit="contain"
            />
          </Styled.LogoWrapper>
          <Styled.IconWrapper onClick={menuOpened ? closeMenu : openMenu}>
            <Styled.MenuIconWrapper>
              {Array.from({ length: 3 }).map((_, i) => (
                <Styled.MenuIconBar
                  menuOpened={menuOpened}
                  key={`burger-menu-row-${i}`}
                  id={`burger-menu-row-${i+1}`}
                />
              ))}
            </Styled.MenuIconWrapper>
          </Styled.IconWrapper>
        </Styled.MainSection>
      </Styled.HeaderContainer>
    </>
  );
};
