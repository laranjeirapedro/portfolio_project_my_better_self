import { colors, spacing } from "@app/styles";
import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${colors.primary[500]};
  width: 100%;
  max-height: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  overflow: hidden;
`;

export const NavbarLink = styled.div`
  padding: ${spacing.xxs}px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary[300]};
  }
`;