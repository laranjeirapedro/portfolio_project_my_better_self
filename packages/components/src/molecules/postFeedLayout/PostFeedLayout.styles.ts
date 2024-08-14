import styled from "@emotion/styled";
import { spacing } from "@app/styles";

export const Container = styled.div`
  width: 100%;
  margin-top: ${spacing.s}px;
  display: flex;
  flex-direction: row;
  gap: ${spacing.s}px;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const SideContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxs}px;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxs}px;
  @media (max-width: 420px) {
    width: 100%;
  }
`;
