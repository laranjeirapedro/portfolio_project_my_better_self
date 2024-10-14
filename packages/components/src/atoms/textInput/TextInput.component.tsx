// TextInput.js
import React from "react";
import styled from "styled-components";
import { colors, fontSize, spacing } from "@app/styles";

// Styled components
const Container = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
  margin-top: ${spacing.xxs}px;
  flex-direction: column;
`;

const Label = styled.label<{ $hasError: boolean }>`
  position: absolute;
  top: -0.75rem;
  left: 0;
  font-size: ${fontSize.m}px;
  font-family: "Roboto", sans-serif;
  color: ${(props) =>
    props.$hasError ? colors.red[700] : colors.darkGrey[700]};
  transition: all 0.3s ease;
  background: white;
  margin: ${spacing.xxxs}px ${spacing.m}px;
  padding: ${spacing.xxxxs}px ${spacing.xxs}px;
`;

const Input = styled.input<{ $hasError: boolean }>`
  display: flex;
  flex: 1;
  padding: 0.75rem 0.5rem;
  border: 1px solid
    ${(props) => (props.$hasError ? colors.red[700] : colors.darkGrey[100])};
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
  label?: string;
  error?: string;
  required?: boolean;
  value: string;
  type: string;
  handleChange: () => void;
};

export const TextInput = ({
  label,
  error,
  required,
  value,
  handleChange,
  type,
}: TextInputProps) => {
  return (
    <Container>
      {label && (
        <Label $hasError={!!error}>
          {label} {required && "*"}
        </Label>
      )}
      <Input
        $hasError={!!error}
        value={value}
        onChange={handleChange}
        type={type}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
