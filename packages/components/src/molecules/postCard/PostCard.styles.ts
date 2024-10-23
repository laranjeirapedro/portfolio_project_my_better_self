import styled from "@emotion/styled";
import { colors, spacing, borderRadius, breakpoints } from "@app/styles";
import { css } from "@emotion/react";

const WrapperCommon = css`
  box-shadow: 0px 2px 4px ${colors.darkGrey[400]};
  border-radius: ${borderRadius.s}px;
  transition: filter 0.2s;
  background-color: ${colors.offWhite["050"]};

  &:hover {
    filter: brightness(120%);
  }
`;

export const SideContentCardWrapper = styled.div<{ isSideContent: boolean }>`
  ${WrapperCommon}
  /* Space for box-shadow propagate */
  margin: 4px 0px;
  cursor: pointer;
  display: ${({ isSideContent }) => (isSideContent ? "block" : "none")};

  @media (max-width: ${breakpoints.tablet}px) {
    display: none;
  }
`;

export const MainContentCardWrapper = styled.div<{ isSideContent: boolean }>`
  ${WrapperCommon}
  display:${({ isSideContent }) => (isSideContent ? "none" : "flex")};
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  height: 380px;
  /* Space for box-shadow propagate */
  margin: 4px 0px;

  @media (max-width: ${breakpoints.tablet}px) {
    display: flex;
  }
`;

export const MainContentTextWrapper = styled.div`
  padding: ${spacing.xs}px ${spacing.s}px;
`;

export const TitleWrapper = styled.div`
  height: 3.5rem;
  margin-bottom: ${spacing.xxxs}px;
`;
