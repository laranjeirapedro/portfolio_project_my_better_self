import React, { ReactNode } from "react";

import styled from "@emotion/styled";

interface ContentWrapperProps {
  children: ReactNode;
  width?: number;
  flexDirection?: string;
}

const HEADER_HEIGHT = 80;
const FOOTER_HEIGHT = 114;

const ContentWrapperStyled = styled.div<{
  width?: number;
  flexDirection?: string;
}>`
  max-width: ${({ width }) => width ?? 1280}px;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px);
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection ?? "column"};
`;

export const ContentWrapper = ({
  children,
  width,
  flexDirection,
}: ContentWrapperProps) => {
  return (
    <ContentWrapperStyled width={width} flexDirection={flexDirection}>
      {children}
    </ContentWrapperStyled>
  );
};
