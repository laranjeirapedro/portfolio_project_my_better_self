// TextInput.js
import React from "react";
import styled from "styled-components";
import { colors, fontSize, spacing } from "@app/styles";

// Styled components
const Container = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
  margin-top: ${spacing.xxs}px;
`;

const Label = styled.label<{ hasError: boolean }>`
  position: absolute;
  top: -0.75rem;
  left: 0;
  font-size: ${fontSize.m}px;
  font-family: "Roboto", sans-serif;
  color: ${(props) =>
    props.hasError ? colors.red[700] : colors.darkGrey[700]};
  transition: all 0.3s ease;
  background: white;
  margin: ${spacing.xxxs}px ${spacing.m}px;
  padding: ${spacing.xxxxs}px ${spacing.xxs}px;
`;

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 0.75rem 0.5rem;
  border: 1px solid
    ${(props) => (props.hasError ? colors.red[700] : colors.darkGrey[100])};
  border-radius: 4px;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${colors.darkGrey[700]};
  }
`;

const ErrorText = styled.span`
  color: ${colors.red[700]};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

// TextInput component

export type TextInputProps = {
  label: string;
  error?: string;
  required?: boolean;
};

export const TextInput = ({ label, error, required }: TextInputProps) => {
  return (
    <Container>
      <Label hasError={!!error}>
        {label} {required && "*"}
      </Label>
      <Input hasError={!!error} />
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
