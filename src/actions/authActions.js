import * as types from "../constants/action-types";
import { setUser } from "./index";

// Plain action creators (no async, no dispatch function)
export const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

export const loginSuccess = (token, user) => ({
  type: types.LOGIN_SUCCESS,
  payload: { token, user },
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

export const logoutAction = () => ({
  type: types.LOGOUT,
});

export const registerRequest = () => ({
  type: types.REGISTER_REQUEST,
});

export const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

// The setUser action is already available from './index'
