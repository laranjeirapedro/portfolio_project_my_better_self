import styled from "@emotion/styled";
import { breakpoints, colors, spacing } from "@app/styles";

export const HeaderContainer = styled.div`
  margin: 0;
  padding: 0px 16px;
  box-shadow: 0px 0px 4px ${colors.darkGrey[900]};
  @media screen and (max-width: ${breakpoints.tablet}px) {
    display: none;
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
  display: flex;
  justify-content: center;
  margin: ${spacing.s}px 0px;
`;

export const LoginLink = styled.div``;

export const RightLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  flex: 1;
`;

export const SearchButton = styled.button`
  background-color: ${colors.primary[100]};
  color: black;
  border: none;
  padding: ${spacing.xs}px ${spacing.s}px;
  cursor: pointer;
  margin-right: ${spacing.s}px;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  text-align: center;
  position: absolute;
  top: 50px;
  right: 0;
  width: 10%;
  background-color: lightgray;
  padding: 10px 0;
  z-index: 10;
  a {
    padding: 10px;
    color: black;
    text-decoration: none;
  }
`;

export const MenuWrapper = styled.div`
  cursor: pointer;
`;
