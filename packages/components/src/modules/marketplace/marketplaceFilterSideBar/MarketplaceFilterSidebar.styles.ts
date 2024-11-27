import { breakpoints, colors, fontSize, spacing } from "@app/styles";
import styled from "@emotion/styled";

export const SideBarContainer = styled.div<{ isMobileFiltersOpen: boolean }>`
  padding: 20px;
  background-color: ${colors.offWhite["050"]};
  max-width: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxs}px;
  border-left: 1px solid ${colors.darkGrey[200]};
  border-right: 1px solid ${colors.darkGrey[200]};

  @media (max-width: ${breakpoints.mobile}px) {
    border-left: none;
    border-right: none;
    padding: 16px;
    max-width: 100%;
    box-shadow: 0px 2px 5px ${colors.darkGrey[100]};
    max-height: ${({ isMobileFiltersOpen }) =>
      isMobileFiltersOpen ? "1000px" : "22px"};
    overflow: hidden;
    transition:
      max-height 0.3s ease,
      padding 0.3s ease; /* Smooth transition for max-height and padding */
  }
`;

export const MobileFilterButton = styled.div`
  display: none;
  flex-direction: row;
  gap: ${spacing.xxxs}px;
  cursor: pointer;
  color: ${colors.primary[600]};
  font-family: roboto;
  line-height: ${spacing.l}px;
  min-height: ${spacing.l}px;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}px) {
    display: flex;
  }
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
