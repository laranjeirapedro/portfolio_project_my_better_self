import { breakpoints, colors, spacing } from "@app/styles";
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  padding: 0px ${spacing.s}px;
  // TODO: use styles.colors instead when available
  box-shadow: 0px 0px 4px ${colors.darkGrey[900]};
  @media screen and (min-width: ${breakpoints.tablet}px) {
    display: none;
  }
  z-index: 10;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 64px;
  /* Replace this value from settings > breakpoints values when implemented */
  max-width: calc(1280px - ${spacing.s}*2px);
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${spacing.s}px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: ${spacing.xl}px;
`;

export const LinkWrapper = styled.div`
  margin: ${spacing.s}px ${spacing.s}px ${spacing.none}px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 100px;
  height: calc(100% - ${spacing.s}px);
  position: relative;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: ${spacing.s}px;
  cursor: pointer;
`;

export const MenuContainer = styled.div<{
  isActive: boolean;
  menuWidth: number;
}>`
  position: fixed;
  z-index: 11;
  top: 0;
  background-color: ${colors.offWhite["050"]};
  box-shadow: 0px 0px 4px ${colors.darkGrey[600]};
  transition: 0.2s ease-in-out;
  width: ${({ menuWidth }) => menuWidth}px;
  height: 100vh;
  right: ${({ isActive, menuWidth }) =>
    isActive ? 0 : -menuWidth - spacing.m - 2}px;
  padding: ${spacing.s}px ${spacing.none}px ${spacing.none}px ${spacing.m}px;
`;
