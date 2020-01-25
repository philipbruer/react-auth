import React from "react";
import { useAuth } from "./components/useAuth";
import { loginUser, logoutUser } from "./components/authActions";

const Authenticate: React.FC = () => {
  const { isAuthenticated, dispatch } = useAuth();

  const handleLogin = () => {
    dispatch(loginUser());
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h1>{isAuthenticated ? "ON" : "OFF"}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Authenticate;
