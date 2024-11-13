import { Navigate } from "react-router-dom";
import React from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
