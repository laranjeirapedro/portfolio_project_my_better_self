import React from 'react';
import { DividerLine, DividerWrapper } from './Divider.styles';

type DividerSize = 'sm' | 'md' | 'lg' | 'xl';

interface DividerProps {
  spacing?: DividerSize;
}

const sizeMap: Record<DividerSize, number> = {
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
};

export const Divider = ({ spacing = 'sm', ...props }: DividerProps) => {
  return (
    <DividerWrapper height={sizeMap[spacing]}>
      <DividerLine />
    </DividerWrapper>
  );
};
