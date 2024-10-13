import {
  breakpoints,
  colors,
  fontSize,
  spacing,
  borderRadius,
} from "@app/styles";
import styled from "@emotion/styled";
import { TextInput, Paragraph, SubHeading } from "../../atoms";

export const StyledForm = styled.div`
  max-width: 730px;
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: row;
  border-radius: ${borderRadius.m}px;
  background-color: ${colors.offWhite["050"]};
  box-shadow: 0px 2px 4px ${colors.darkGrey[400]};
  margin: ${spacing.m}px auto;
`;

export const ImageContainer = styled.div`
  width: 50%;
`;

export const TextContainer = styled.div`
  width: 50%;
  padding: ${spacing.s}px;
  font-family: helvetica;
`;

export const StyledTextInput = styled(TextInput)`
  width: 100%;
`;

export const StyledTextInputTitle = styled(Paragraph)`
  font-weight: 600;
`;

export const StyledTextInputError = styled(Paragraph)`
  color: ${colors.red.default}
  font-size: ${fontSize.xs}px;
`;

export const StyledTitle = styled(SubHeading)`
  font-weight: 600;
  text-align: center;
`;
