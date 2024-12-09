import styled from '@emotion/styled';
import { colors, spacing } from '@app/styles';

export const DividerWrapper = styled.div<{ height: number }>`
  width: 100%;
  margin: 0;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
`;

export const DividerLine = styled.hr`
  width: 100%;
  margin: 0 ${spacing.xl}px;
  border: none;
  border-top: 1px solid ${colors.darkGrey[400]};
`;
