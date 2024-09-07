import styled from "@emotion/styled";
import { breakpoints, colors, spacing } from "@app/styles";

export const HeaderContainer = styled.div`
  margin: ${spacing.none};
  height: ${spacing.xxxxxl}px;
  padding: ${spacing.none}px ${spacing.s}px;
  box-shadow: ${spacing.none}px ${spacing.none}px ${spacing.xxxs}px ${colors.darkGrey[900]};
  @media screen and (max-width: ${breakpoints.tablet}px) {
    display: none;
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const TopBarContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: calc(${breakpoints.desktop}px - ${spacing.s * 2}px);
  max-width: 100%;
  flex: 1;
  margin-bottom: ${spacing.xxxs}px;
  margin-top: ${spacing.xs}px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 0;
  height: ${spacing.xxxl}px;
  cursor: pointer;
`;

export const LeftLinksContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const LinksContainer = styled.div`
  justify-content: center;
  margin: ${spacing.s}px ${spacing.none}px;
`;

export const CommonLinks = styled.div`
  padding: ${spacing.xxs}px ${spacing.none}px;
  line-height: ${spacing.xxxxs};
  margin-bottom: ${spacing.xxxs}px;
`;

export const Divider = styled.div`
  border-top: 1px solid #ccc;
`;

export const LoginLink = styled.div`
  padding: ${spacing.xxs}px ${spacing.none}px;
  line-height: ${spacing.xxxxs};
`;

export const RightLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  flex: 1;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  text-align: left;
  position: absolute;
  border: ${spacing.xxxxs}px solid ${colors.darkGrey[200]};
  border-radius: ${spacing.xxxs}px;
  background-color: white;
  top: ${spacing.xxxl}px;
  right: -${spacing.xs}px;
  z-index: 10;
  &::after {
    content: '';
    position: absolute;
    top: -${spacing.m}px;
    right: ${spacing.m}px;
    border-width: ${spacing.xs}px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
  a {
    padding: ${spacing.xs}px;
    color: black;
    text-decoration: none;
  }
`;

export const MenuWrapper = styled.div`
  cursor: pointer;
`;
