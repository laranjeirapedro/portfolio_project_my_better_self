import styled from "@emotion/styled";
import { breakpoints, colors, spacing } from "@app/styles";

export const FooterContainer = styled.div`
  margin: 0;
  padding: 0px ${spacing.s}px;
  box-shadow: 0px 0px ${spacing.xxxxs}px ${colors.darkGrey[900]};
  display: flex;
  background-color: ${colors.offWhite["050"]};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: ${spacing.xxs}px;
  max-width: calc(${breakpoints.desktop}px - ${spacing.s * 2}px);
  width: 100%;
  margin: auto;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: ${spacing.m}px;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  padding-bottom: ${spacing.xxxxs}px;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    display: flex;
    justify-content: center;
  }
`;

export const MidContainer = styled.div`
  text-align: center;
  flex: 1;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: right;
  text-align: right;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const LinksContainer = styled.div`
  line-height: ${spacing.l}px;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${spacing.s}px;
  margin-top: ${spacing.xxxs}px;
  justify-content: right;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    justify-content: center;
  }
`;

export const IconWrapper = styled.div`
  margin-right: ${spacing.xxs}px;
`;

export const CopyrightContainer = styled.div`
  font-weight: bold;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: ${spacing.xs}px;
`;
