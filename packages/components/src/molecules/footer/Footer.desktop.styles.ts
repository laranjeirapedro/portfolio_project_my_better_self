import { fontObject } from "./../../../../../apps/blog-cms/schemaTypes/objects/fonts/font";
import styled from "@emotion/styled";
import { breakpoints, colors, spacing, fontSize } from "@app/styles";

export const FooterContainer = styled.div`
  margin: 0;
  padding: 0px ${spacing.s}px;
  box-shadow: 0px 0px ${spacing.xxxxs}px ${colors.darkGrey[900]};
  display: flex;
`;

export const ContentContainer = styled.div`
  display: inline;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: ${spacing.xxs}px;
`;

export const GridContainer = styled.div`
  display: flex;
  gap: ${spacing.xs}px;
`;

export const LogoContainer = styled.div`
  padding-bottom: ${spacing.xxxxs}px;
  flex: 1;
`;

export const MidContainer = styled.div`
  text-align: center;
  flex: 2;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: right;
  text-align: right;
  flex: 1;
`;

export const LinksContainer = styled.div`
  line-height: ${spacing.l}px;
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${spacing.s}px;
  margin-top: ${spacing.xxxs}px;
  justify-content: right;
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
