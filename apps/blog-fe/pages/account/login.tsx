import { useState } from "react";
import { auth } from "@utils/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { Login as LoginModule } from "@app/components";
import { ContentWrapper } from "@components";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in both fields.");
      return false;
    }
    setError("");
    return true;
  };

  const handleEmailLogin = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/account/dashboard"); // Redirect after login
    } catch (err) {
      setError("Failed to log in with email and password.");
    }
  };

  const handleEmailChanged = (value: string) => {
    setEmail(value);
  };
  const handlePasswordChanged = (value: string) => {
    setPassword(value);
  };

  return (
    <ContentWrapper>
      <LoginModule
        onSubmit={handleEmailLogin}
        error={error}
        handleEmailChanged={handleEmailChanged}
        handlePasswordChanged={handlePasswordChanged}
      />
    </ContentWrapper>
  );
};

export default Login;
