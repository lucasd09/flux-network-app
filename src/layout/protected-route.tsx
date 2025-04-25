import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  // auth check logic
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}