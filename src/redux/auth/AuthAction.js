import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,
    REGISTER_FAILURE, FORGET_REQUEST, FORGET_SUCCESS, FORGET_FAILURE, LOGOUT, REDIRECT } from './AuthTypes';
  
  export const loginRequest = (credentials) => ({
    type: LOGIN_REQUEST,
    payload: credentials,
  });
  
  export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });
  
  export const registerRequest = (credentials) => ({
    type: REGISTER_REQUEST,
    payload: credentials,
  });
  
  export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user,
  });
  
  export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
  });
  
  export const forgetRequest = (credentials) => ({
    type: FORGET_REQUEST,
    payload: credentials,
  });
  
  export const forgetSuccess = (user) => ({
    type: FORGET_SUCCESS,
    payload: user,
  });
  
  export const forgetFailure = (error) => ({
    type: FORGET_FAILURE,
    payload: error,
  });
  
  export const redirect = (payload) => ({
    type: REDIRECT,
    payload,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });

  