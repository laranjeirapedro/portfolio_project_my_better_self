import styled from "@emotion/styled";
import { breakpoints, spacing } from "@app/styles";

export const Container = styled.div`
  margin: ${spacing.s}px auto;
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 0 ${spacing.s}px;

  @media (max-width: ${breakpoints.tablet}px) {
    gap: ${spacing.s}px;
    flex-direction: column;
  }
`;

export const SideContainer = styled.div`
  display: flex;
  flex: 20% 0 1;
  flex-direction: column;
  gap: ${spacing.xxs}px;

  @media (max-width: ${breakpoints.tablet}px) {
    flex: 1;
  }
`;

export const MainContainer = styled.div`
  flex: 60% 0 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxs}px;
  padding: 0px ${spacing.s}px;

  @media (max-width: ${breakpoints.tablet}px) {
    flex: 1;
    padding: 0px;
  }
`;
