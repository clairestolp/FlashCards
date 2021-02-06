import {
  UPDATE_USER,
  LOGIN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./../actionTypes";

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const login = (email) => ({
  type: LOGIN,
  email,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});
