import { Button, Heading, Paragraph, TextInput } from "@app/components";
import { ContentWrapper } from "../../components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../../utils/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import styled from "@emotion/styled";
import { Spacer } from "../../../../packages/components/src/atoms/spacer/spacer.component";
import { spacing } from "@app/styles";
import { useCallback } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/account/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const [wasEmailVerificationSent, setWasEmailVerificationSent] =
    useState(false);

  const handleSignup = useCallback(async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);

      setWasEmailVerificationSent(true);

      // router.push("/account/dashboard"); // Redirect to home or another page after successful signup
    } catch (error: any) {
      setError("Something went wrong. Please try again later.");
    }
  }, [email, password]);

  const onEmailChanged = useCallback(
    (e: any) => {
      setEmail(e.target.value);
    },
    [setEmail],
  );

  const onPasswordChanged = useCallback(
    (e: any) => {
      setPassword(e.target.value);
    },
    [setPassword],
  );

  return (
    <ContentWrapper>
      {wasEmailVerificationSent ? (
        <EmailVerificationMessage />
      ) : (
        <SignupWrapper>
          <FormWrapper>
            <Heading text="Sign Up" />
            <Spacer height={spacing.s} />
            <div>
              <StyledTextInput
                type="email"
                label="Email"
                value={email}
                handleChange={onEmailChanged as never}
                required
              />
              <StyledTextInput
                type="password"
                label="Password"
                value={password}
                handleChange={onPasswordChanged as never}
                required
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Button label="Sign Up" onClick={handleSignup} />
            </div>
          </FormWrapper>
        </SignupWrapper>
      )}
    </ContentWrapper>
  );
};

export default Signup;

const SignupWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${spacing.xxxxxl}px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: white;
  padding: ${spacing.s}px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: calc(100% - ${spacing.s * 2}px);
`;

const StyledTextInput = styled(TextInput)`
  margin-bottom: 1rem;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

/**
 * Email verification
 */

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
`;

const MessageContainer = styled.div`
  padding: 16px;
  background-color: #e0f7fa;
  border: 1px solid #4caf50;
  border-radius: 4px;
  color: #004d40;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  margin: auto ${spacing.s}px;
  max-width: 400px;
  width: 100%;
`;

const EmailVerificationMessage = () => {
  return (
    <Wrapper>
      <MessageContainer>
        <Heading text="Thank you!" />
        <Spacer height={spacing.s} />
        <Paragraph text="A verification email will arrive shortly." />
      </MessageContainer>
    </Wrapper>
  );
};
