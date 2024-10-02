import styled from "@emotion/styled";
import { breakpoints, spacing } from "@app/styles";

export const Container = styled.div`
  margin: ${spacing.s}px auto;
  display: flex;

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-self: stretch;
  gap: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${spacing.s}px;
  justify-content: space-between;

  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

export const PostWrapper = styled.div<{ gap: number }>`
  width: calc(25% - ${spacing.s}px);
  box-sizing: border-box; /* Ensures padding is included in the width */
  justify-content: space-between;
  height: 100%;
  display: flex;

  @media (max-width: ${breakpoints.desktop}px) {
    width: calc(${100 / 3}% - ${spacing.s}px);
  }

  @media (max-width: ${breakpoints.tablet}px) {
    width: calc(50% - ${spacing.s}px);
  }

  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;
