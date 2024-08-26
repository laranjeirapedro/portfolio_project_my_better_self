import styled from "@emotion/styled";

export const Block = styled.div<{ width?: number; height?: number }>(
  ({ width, height }) => ({
    ...(width && { width }),
    ...(height && { height }),
  }),
);
