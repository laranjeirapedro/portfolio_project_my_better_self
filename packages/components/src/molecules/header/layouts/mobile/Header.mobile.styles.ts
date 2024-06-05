import { breakpoints, spacing } from "@app/styles";
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  padding: 0px ${spacing.s}px;
  // TODO: use styles.colors instead when available
  box-shadow: 0px 0px 4px #2a2a2a;
  @media screen and (min-width: ${breakpoints.tablet}px) {
    display: none;
  }
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
  flex-direction: row;
`;

export const LinkWrapper = styled.div`
  margin-left: ${spacing.s}px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 100px;
  height: calc(100% - ${spacing.s}px);
`;
