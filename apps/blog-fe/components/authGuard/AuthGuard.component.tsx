import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";

const guarderRoutes = ["/account/dashboard"];

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading, isEmailVerified } = useAuth();
  const router = useRouter();

  const isRouteGuarded = (route: string): boolean => {
    return guarderRoutes.includes(route);
  };

  const currentRoute = router.pathname;

  useEffect(() => {
    if (!loading && !isAuthenticated && isRouteGuarded(currentRoute)) {
      // Redirect to login page if not authenticated
      router.push("/account/login");
    }
    if (
      !loading &&
      isAuthenticated &&
      isRouteGuarded(currentRoute) &&
      !isEmailVerified
    ) {
      // Redirect to login page if not authenticated
      router.push("/account/email-verification");
    }
  }, [isAuthenticated, loading, router]);

  if (loading || (isRouteGuarded(currentRoute) && !isAuthenticated)) {
    // Show a loading indicator while checking authentication
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthGuard;
