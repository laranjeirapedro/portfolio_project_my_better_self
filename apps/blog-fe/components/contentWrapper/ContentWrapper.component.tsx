import React, { ReactNode } from "react";

import styled from "@emotion/styled";

interface ContentWrapperProps {
  children: ReactNode;
}

const HEADER_HEIGHT = 80;
const FOOTER_HEIGHT = 114;

const ContentWrapperStyled = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px);
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <ContentWrapperStyled>{children}</ContentWrapperStyled>;
};
