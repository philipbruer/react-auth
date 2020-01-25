import { LOGIN, LOGOUT } from "./authConstants";
import { AuthAction } from "./authActions";

export interface AuthState {
  isAuthenticated: boolean;
}

export const authReducer = (state: AuthState, action: AuthAction) => {
  return {
    [LOGIN]: {
      ...state,
      isAuthenticated: true
    },
    [LOGOUT]: {
      ...state,
      isAuthenticated: false
    }
  }[action.type];
};
