import styled from "@emotion/styled";
import { breakpoints, colors, spacing } from "@app/styles";

export const HeaderContainer = styled.div`
  padding: 0px 16px;
  // TODO: use styles.colors instead when available
  box-shadow: 0px 0px 4px ${colors.darkGrey[900]};
  @media screen and (max-width: ${breakpoints.tablet}px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 64px;
  /* Replace this value from settings > breakpoints values when implemented */
  max-width: calc(${breakpoints}px - ${spacing.s * 2}px);
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
  position: relative;
  // TODO: ideally the width would be calculated by the aspect ratio coming form the image metadata>dimensions -> logoHeight * aspectRatio
  max-width: 60px;
  width: fit-content;
  height: calc(100% - ${spacing.s}px);
  cursor: pointer;
`;
