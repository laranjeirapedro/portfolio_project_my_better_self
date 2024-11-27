import { breakpoints, colors, spacing } from "@app/styles";
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

  @media (max-width: ${breakpoints.mobile}px) {
    overflow-x: auto; /* Enable horizontal scrolling */
    flex-flow: row nowrap; /* Ensure the items stay in a row */
    justify-content: flex-start; /* Align items to the left for a better mobile experience */
    scrollbar-width: none; /* Optional: Hide scrollbar in Firefox */
    -ms-overflow-style: none; /* Optional: Hide scrollbar in IE/Edge */
  }

  &::-webkit-scrollbar {
    display: none; /* Optional: Hide scrollbar in WebKit-based browsers */
  }
`;

export const NavbarLink = styled.div<{ isCurrent: boolean }>`
  padding: ${spacing.xxs}px;
  background-color: ${({ isCurrent }) =>
    isCurrent ? colors.offWhite["900"] : colors.primary[500]};
  cursor: pointer;
  border-left: 1px solid ${colors.offWhite["050"]};
  white-space: nowrap; /* Prevent wrapping of text in links */
  &:first-child {
    border-left: none;
  }
  &:hover {
    background-color: ${colors.primary[300]};
  }
`;
