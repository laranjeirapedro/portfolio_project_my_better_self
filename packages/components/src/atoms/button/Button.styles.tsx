import styled from "@emotion/styled";
import { ButtonTypes } from "./Button.types";
import { colors, fontSize, spacing } from "@app/styles";

const Primary = styled.div<{ disabled: boolean }>`
  max-height: 32px;
  border-radius: 8px;
  padding: ${spacing.s}px;
  margin: ${spacing.xxs}px ${spacing.none}px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ disabled }) =>
    disabled ? colors.darkGrey[500] : colors.primary.default};
  color: ${({ disabled }) =>
    disabled ? colors.offWhite["050"] : colors.offWhite[700]};
  cursor: ${({ disabled }) => (disabled ? "arrow" : "pointer")};
  font-size: ${fontSize.m}px;
  font-weight: bold;
  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? colors.darkGrey[500] : colors.primary[300]};
    color: ${({ disabled }) =>
      disabled ? colors.offWhite["050"] : colors.darkGreen[800]};
  }
`;

const Secondary = styled(Primary)`
  color: ${colors.primary.default};
  background-color: ${colors.secondary.default};
  &:hover {
    background-color: ${colors.secondary[100]};
    color: ${colors.primary[900]};
  }
`;

const Tertiary = styled(Primary)`
  background-color: transparent;
  border: 2px solid ${colors.primary.default};
  color: ${colors.primary.default};
  &:hover {
    background-color: transparent;
    border: 2px solid ${colors.primary[200]};
    color: ${colors.primary[200]};
  }
`;

export const StyledButton = {
  [ButtonTypes.PRIMARY]: Primary,
  [ButtonTypes.SECONDARY]: Secondary,
  [ButtonTypes.TERTIARY]: Tertiary,
};
