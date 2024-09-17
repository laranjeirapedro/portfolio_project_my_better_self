import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import { sendEmailVerification, User } from "firebase/auth";
import { Button, Heading, Paragraph, Spacer } from "@app/components";
import { spacing } from "@app/styles";
import styled from "@emotion/styled";
import { ContentWrapper } from "../../components";

const EmailVerification: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [canResend, setCanResend] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        if (user.emailVerified) {
          router.push("/account/dashboard");
        }
      } else {
        router.push("/account/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const sendVerificationEmail = async () => {
    if (user && canResend) {
      // Send verification email
      await sendEmailVerification(user);
      setCanResend(false);
      setTimeout(() => setCanResend(true), 30000); // 30 seconds delay
    }
  };

  return (
    <ContentWrapper>
      <Container>
        <Heading text="Email Verification" />
        <Spacer height={spacing.m} />
        <Paragraph text="Please verify your email to continue." />
        <Spacer height={spacing.l} />
        <Button
          onClick={sendVerificationEmail}
          disabled={!canResend}
          label={
            canResend ? "Resend Verification Email" : "Please wait 30 seconds"
          }
        />
      </Container>
    </ContentWrapper>
  );
};

export default EmailVerification;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 400px;
  max-width: calc(100% - ${spacing.s * 4}px);
  align-items: center;
  padding: ${spacing.s}px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
