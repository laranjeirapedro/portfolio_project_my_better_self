import styled from "@emotion/styled";
import { breakpoints, spacing } from "@app/styles";

export const Container = styled.div`
  width: 100%;
  margin: ${spacing.s}px auto;
  display: flex;
  flex-direction: row;
  gap: ${spacing.s}px;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const SideContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxs}px;
  background-color: #eee;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${spacing.s}px;
  justify-content: space-between;
`;

export const PostWrapper = styled.div<{ gap: number }>`
  width: calc(50% - ${({ gap }) => gap / 2}px);
  @media (max-width: ${breakpoints.tablet}px) {
    width: 100%;
  }
`;
