import { colors } from "@app/styles";
import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  background-color: ${colors.offWhite["050"]};
  max-width: 100%;
  width: 400px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid ${colors.darkGrey["100"]};
  border-radius: 4px;

  &:focus {
    outline: ${colors.primary.default};
    border-color: ${colors.primary.default};
  }
`;

export const LoginButton = styled.button`
  padding: 10px;
  background-color: ${colors.primary.default};
  color: ${colors.offWhite["050"]};
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary[300]};
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.red.default};
  font-size: 14px;
  margin-bottom: 10px;
`;
