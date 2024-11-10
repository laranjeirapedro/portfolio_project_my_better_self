// hooks/useAuth.ts
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Assuming you are using Firebase
import { auth } from "@utils/firebaseConfig";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsEmailVerified(user?.emailVerified ?? false);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { isAuthenticated, loading, isEmailVerified };
};
