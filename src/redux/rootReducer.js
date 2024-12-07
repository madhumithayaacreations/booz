import { combineReducers } from 'redux';
import AuthReducer from './auth/AuthReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;