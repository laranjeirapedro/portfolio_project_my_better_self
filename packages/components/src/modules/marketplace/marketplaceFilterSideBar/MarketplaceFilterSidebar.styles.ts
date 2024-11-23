import { colors, spacing, fontSize } from "@app/styles";
import styled from "@emotion/styled";

export const SideBarContainer = styled.div`
  padding: 20px;
  background-color: ${colors.offWhite["050"]};
  max-width: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxs}px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxxs}px;
`;

export const FilterOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.xxs}px;
  font-size: ${fontSize.m}px;
  font-family: roboto;
  text-align: left;
  line-height: ${spacing.l}px;
  min-height: ${spacing.l}px;
  align-items: center;
`;

export const RadioButton = styled.input`
appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.darkGrey["300"]};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &:checked {
    background-color: ${colors.primary["500"]};
    border-color: ${colors.primary["500"]};
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: ${colors.offWhite["050"]};
    border-radius: 50%;
  }

  &:hover {
    border-color: ${colors.primary["400"]};
  }

  &:focus {
    outline: 2px solid ${colors.primary["300"]};
    outline-offset: 2px;
  }
`;
