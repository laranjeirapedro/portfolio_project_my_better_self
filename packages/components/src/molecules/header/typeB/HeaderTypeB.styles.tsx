import { breakpoints, colors, fontSize, spacing } from "@app/styles";
import styled from "@emotion/styled";
import { Link } from "../../../atoms";

const ANIMATION_DURATION = 0.3;

export const HeaderContainer = styled.div<{ menuOpened: boolean }>(
  ({ menuOpened }) => ({
    position: menuOpened ? "fixed" : "initial",
    ...(menuOpened && { top: 0, left: 0 }),
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "80px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    zIndex: 89,
  })
);

export const MainSection = styled.div({
  maxWidth: `${breakpoints.desktop}px`,
  width: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `0 ${spacing.s}px`,
});

export const LogoWrapper = styled.div({
  cursor: "pointer",
  zIndex: 91,
});

export const IconWrapper = styled.div({
  cursor: "pointer",
  zIndex: 91,
});

const ICON_HEIGHT = 22;
const ICON_WIDTH = 28;
const ICON_DIAGONAL = Math.sqrt(ICON_HEIGHT ** 2 + ICON_WIDTH ** 2);

export const MenuIconWrapper = styled.div({
  height: ICON_HEIGHT,
  width: ICON_WIDTH,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const MenuIconBar = styled.div<{ menuOpened: boolean }>(
  ({ menuOpened }) => ({
    width: "100%",
    height: 4,
    borderRadius: 4,
    backgroundColor: `${colors.darkGrey[900]}`,
    opacity: 1,
    transform: "rotate(0deg) translateY(0%)",
    transition: `${ANIMATION_DURATION}s`,

    "&:nth-child(1)": {
      ...(menuOpened && {
        transform: `rotate(45deg) translateY(${ICON_HEIGHT / 2 + 1}px)`,
        width: ICON_DIAGONAL,
      }),
    },
    "&:nth-child(2)": {
      ...(menuOpened && { opacity: 0 }),
    },
    "&:nth-child(3)": {
      ...(menuOpened && {
        transform: `rotate(-45deg) translateY(-${ICON_HEIGHT / 2 + 1}px)`,
        width: ICON_DIAGONAL,
      }),
    },
  })
);

export const ExpandableMenu = styled.div<{ menuOpened: boolean }>(
  ({ menuOpened }) => ({
    top: menuOpened ? "0" : "-97%",
    left: 0,
    position: "fixed",
    display: "flex",
    width: "100%",
    height: "96%",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
    backgroundColor: colors.secondary[100],
    zIndex: 90,
    transition: `top ${ANIMATION_DURATION}s ease`,
    transitionDelay: menuOpened ? "0s" : `${ANIMATION_DURATION}s`,
  })
);

export const ExpandableMenuMain = styled.div({
  height: "100%",
  width: "100%",
  maxWidth: `${breakpoints.desktop}px`,
  paddingRight: spacing.s,
  paddingLeft: spacing.s,
  margin: "auto",
});

export const ExpandableMenuContent = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: "1 0 100%",
  width: "100%",
  maxWidth: `${breakpoints.desktop}px`,
  margin: "auto",
});

export const ExpandableLinksContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: "1 0 100%",
  width: "100%",
  maxWidth: `${breakpoints.desktop}px`,
  margin: "auto",
});

export const ExpandableLinkContainer = styled.div<{ menuOpened: boolean }>(
  ({ menuOpened }) => ({
    display: "flex",
    maxWidth: `${breakpoints.desktop}px`,
    margin: "auto",
    paddingBottom: menuOpened ? spacing.xxxs : spacing.xs,
    opacity: menuOpened ? 1 : 0,
    marginBottom: spacing.l,

    transition: `${ANIMATION_DURATION}s`,
    transitionDelay: menuOpened ? `${ANIMATION_DURATION}s` : "0s",
  })
);

export const ExpandableLink = styled(Link)<{ active: boolean }>(
  ({ active }) => ({
    color: active ? colors.secondary[900] : colors.darkGrey[800],
    textDecoration: active ? "underline" : "none",
    fontWeight: active ? 700 : 500,
    cursor: active ? "default" : "pointer",
    fontSize: fontSize.xl,
    "&:hover": {
      ...(!active && { color: colors.primary[500] }),
    },
  })
);

export const Divider = styled.div<{ menuOpened: boolean }>(
  ({ menuOpened }) => ({
    height: 2,
    borderRadius: 2,
    width: menuOpened ? `calc(100% - ${spacing.m * 2}px)` : 0,
    backgroundColor: colors.primary[800],
    margin: `${spacing.s}px auto`,
    transition: `${ANIMATION_DURATION}s`,
    transitionDelay: menuOpened ? `${ANIMATION_DURATION}s` : "0s",
  })
);
