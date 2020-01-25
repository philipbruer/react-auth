import { LOGIN, LOGOUT } from "./authConstants";

export type AuthAction = AuthActionLogin | AuthActionLogout;

export interface AuthActionLogin {
  type: typeof LOGIN;
}

export interface AuthActionLogout {
  type: typeof LOGOUT;
}

export const loginUser = (): AuthActionLogin => ({ type: LOGIN });

export const logoutUser = (): AuthActionLogout => ({ type: LOGOUT });
