import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: React.ReactNode;
  ordered?: boolean;
};

const listStyle = css`
  display: block;
  position: relative;
  padding-left: 1.2rem; /* Adds padding to align list items properly */
  margin-left: 0; /* Removes default margin */
`;

const OList = styled.ol(listStyle);
const UList = styled.ul(listStyle);

export const List = ({ children, ordered = false }: Props) => {
  return <>{ordered ? <OList>{children}</OList> : <UList>{children}</UList>}</>;
};
