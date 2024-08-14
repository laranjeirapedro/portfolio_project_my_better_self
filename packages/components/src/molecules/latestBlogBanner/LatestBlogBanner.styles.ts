import styled from "@emotion/styled";
import { borderRadius, spacing } from "@app/styles";

export const Container = styled.div`
  padding-top: ${spacing.s}px;
`;

export const BlogWrapper = styled.div`
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  border-radius: ${borderRadius.s}px;
  overflow: hidden;
`;

export const ContentWraper = styled.div`
  margin-bottom: ${spacing.xxs}px;
`;

export const ProfileImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;
  margin-right: ${spacing.xxs}px;
`;

export const AuthorWrapper = styled.div`
  margin-top: ${spacing.xxs}px;
  margin-bottom: ${spacing.xxs}px;
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
