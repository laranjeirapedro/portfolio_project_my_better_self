import styled from "@emotion/styled";
import { breakpoints, colors, spacing } from "@app/styles";

export const HeaderContainer = styled.div`
  margin: ${spacing.none};
  height: ${spacing.xxxxxl}px;
  padding: ${spacing.none}px ${spacing.s}px;
  box-shadow: ${spacing.none}px ${spacing.none}px ${spacing.xxxs}px
    ${colors.darkGrey[900]};
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
  margin: ${spacing.none}px;
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
  border: 1px solid ${colors.darkGrey[200]};
  border-radius: ${spacing.xxs}px;
  background-color: white;
  top: ${spacing.xxxl}px;
  right: -${spacing.xs}px;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &::after {
    content: "";
    position: absolute;
    top: -${spacing.m}px;
    right: ${spacing.m}px;
    border-width: ${spacing.xs}px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
  a {
    display: flex;
    padding: ${spacing.xxxxs}px ${spacing.xxs}px;
    color: ${colors.primary.default};
    font-weight: 700;
    text-decoration: none;
    &:hover {
      background-color: ${colors.primary["050"]};
      color: ${colors.secondary[600]};
    }
  }
`;

export const MenuWrapper = styled.div`
  cursor: pointer;
`;

export const IconWrapper = styled.div<{ isOpen: boolean }>`
  & svg {
    color: ${({ isOpen }) =>
      isOpen ? colors.secondary[800] : colors.primary.default};
    &:hover {
      color: ${({ isOpen }) =>
        isOpen ? colors.secondary[300] : colors.primary[300]};
    }
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
