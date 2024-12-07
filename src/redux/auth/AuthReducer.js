import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, 
         REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE 
       } from './AuthTypes';

const initialState = {
loading: false,
user: null,
success: null,
error: null,
};

const AuthReducer = (state = initialState, action) => {
switch (action.type) {
case LOGIN_REQUEST:
  return { ...state, loading: true, error: null, success: null };
case LOGIN_SUCCESS:
  return { ...state, loading: false, user: action.payload, success: null };
case LOGIN_FAILURE:
  return { ...state, loading: false, error: action.payload };
case LOGOUT:
  return { ...state, user: null, success: null, error: null };
case REGISTER_REQUEST:
  return { ...state, loading: true, error: null, success: null };
case REGISTER_SUCCESS:
  return { ...state, loading: false, user: action.payload, success: action.payload.body?.success , error: null };
  // return { ...state, loading: false, user: action.payload, success: "User Added Succesfully" , error: null };
case REGISTER_FAILURE:
  return { ...state, loading: false, error: action.payload, success: null };
  default:
    return state;
}
};

export default AuthReducer;
