import React, { useState } from "react";
import {
  LoginContainer,
  Form,
  Input,
  ErrorMessage,
  LoginButton,
} from "./Login.styles";

export type LoginProps = {
  onSubmit: (props: any) => Promise<void>;
  error: string;
  handleEmailChanged: (value: string) => void;
  handlePasswordChanged: (value: string) => void;
};

export const Login = ({
  onSubmit,
  error,
  handleEmailChanged,
  handlePasswordChanged,
}: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChanged = (value: string) => {
    handleEmailChanged(value);
    setEmail(value);
  };
  const onPasswordChanged = (value: string) => {
    handlePasswordChanged(value);
    setPassword(value);
  };

  return (
    <LoginContainer>
      <Form onSubmit={onSubmit}>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onEmailChanged(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onPasswordChanged(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginButton type="submit">Login</LoginButton>
      </Form>
    </LoginContainer>
  );
};
