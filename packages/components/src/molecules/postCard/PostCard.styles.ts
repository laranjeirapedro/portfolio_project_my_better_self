import styled from "@emotion/styled";
import { colors, spacing, borderRadius } from "@app/styles";
import { css } from "@emotion/react";
const WrapperCommon = css`
  box-shadow: 0px 0px 2px ${colors.primary[300]};
  border-radius: ${borderRadius.s}px;
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
  ${CardPadding}
`;
