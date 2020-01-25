import React, { createContext } from "react";
import { AuthState, authReducer } from "./authReducer";
import { AuthAction } from "./authActions";

interface AuthContextState extends AuthState {
  dispatch: React.Dispatch<AuthAction>;
}

const getInitialState = () => ({
  isAuthenticated: false
});

export const AuthContext = createContext<AuthContextState>({
  ...getInitialState(),
  dispatch: () => {}
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<AuthState, AuthAction>
  >(authReducer, getInitialState());

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.displayName = "AuthProvider";
