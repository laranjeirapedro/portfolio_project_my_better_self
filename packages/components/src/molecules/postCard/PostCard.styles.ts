import styled from "@emotion/styled";
import { colors, spacing, borderRadius } from "@app/styles";
import { css } from "@emotion/react";

const WrapperCommon = css`
  box-shadow: 0px 2px 4px ${colors.darkGrey[400]};
  border-radius: ${borderRadius.s}px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(120%);
  }
`;

const CardPadding = css`
  padding: ${spacing.s}px;
`;

export const SideContentCardWrapper = styled.div`
  ${WrapperCommon}
  ${CardPadding}
`;

export const MainContentCardWrapper = styled.div`
  ${WrapperCommon}
  cursor: pointer;
`;

export const MainContentTextWrapper = styled.div`
  padding: ${spacing.xxs}px;
`;
