import styled from "@emotion/styled";
import { breakpoints, spacing } from "@app/styles";

export const Container = styled.div`
  margin: ${spacing.s}px auto;
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 0 ${spacing.s}px;
  width: calc(100% - ${spacing.s * 2}px);
  overflow: hidden;
  gap: ${spacing.s}px;

  @media (max-width: ${breakpoints.tablet}px) {
    gap: ${spacing.s}px;
    flex-direction: column;
  }
`;

export const SideContainer = styled.div`
  display: flex;
  flex: 30% 0 1;
  flex-direction: column;
  gap: ${spacing.xs}px;
  max-width: 30%;

  @media (max-width: ${breakpoints.tablet}px) {
    flex: 1;
    max-width: 100%;
  }
`;

export const MainContainer = styled.div`
  flex: 1 0 70%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxs}px;
  max-width: 70%;

  @media (max-width: ${breakpoints.tablet}px) {
    flex: 1;
    padding: 0px;
    max-width: 100%;
  }
`;
