import styled from "@emotion/styled";
import { borderRadius, colors, fontSize, spacing } from "@app/styles";
import { Heading, Paragraph } from "../../atoms";

export const Container = styled.div<{
  isClickable?: boolean;
  bannerHeight?: number;
}>`
  padding: ${spacing.s}px ${spacing.none}px;
  display: flex;
  position: relative;
  min-height: ${({ bannerHeight = 300 }) => bannerHeight}px;
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "cursor")};
  transition: filter 0.2s;
  background-color: ${colors.offWhite["050"]};
  filter: brightness(100%);

  &:hover {
    filter: brightness(${({ isClickable }) => (isClickable ? 120 : 100)}%);
  }
`;

export const BackgroundImageContainer = styled.div`
  top: 0;
  position: absolute;
  left: calc((100vw - 1280px) * -1 / 2);
  width: 100vw;
  height: 100%;
  z-index: -1;
  filter: brightness(50%);
  overflow: hidden;

  @media (max-width: 1280px) {
    left: 0;
  }
`;

export const ImageWrapper = styled.div<{ scrollY?: number }>`
  border-radius: ${borderRadius.s}px;
  overflow: hidden;
`;

export const ContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: auto;
  padding: ${spacing.none}px ${spacing.s}px;
`;

export const ProfileImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;
  margin-right: ${spacing.xxs}px;
`;

export const AuthorWrapper = styled.div`
  margin-top: ${spacing.xxs}px;
  margin-bottom: ${spacing.xxs}px;
  padding: ${spacing.none}px ${spacing.s}px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-right: ${spacing.xxs}px;
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${spacing.s}px;
`;

export const BannerHeading = styled(Heading)`
  color: ${colors.offWhite["050"]};
  text-align: center;
  font-size: ${fontSize.xxxl}px;
`;
export const BannerParagraph = styled(Paragraph)`
  color: ${colors.offWhite["050"]};
  font-size: ${fontSize.l}px;
  text-align: center;
`;
