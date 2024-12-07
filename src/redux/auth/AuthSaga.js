import { call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure, registerSuccess, registerFailure } from './AuthAction';
import { LOGIN_REQUEST, REGISTER_REQUEST } from './AuthTypes';
import  { AuthEffect, setAuthHeader, SignUpEffect }  from './AuthEffect';
import { jwtDecode } from 'jwt-decode';
import CryptoJS from 'crypto-js';

const SECRET_KEY = '843567893696976453275974432697R634976'; 

function* loginSaga(action) {
  try {
    const response = yield call(AuthEffect, action.payload);
    const access = response.data.body?.accessToken;
    const refresh = response.data.body?.refreshToken;

    if (access && refresh) {
      setAuthHeader(access);

      const encryptedAccessToken = CryptoJS.AES.encrypt(access, SECRET_KEY).toString();
      const encryptedRefreshToken = CryptoJS.AES.encrypt(refresh, SECRET_KEY).toString();
      localStorage.setItem('accessToken', encryptedAccessToken);
      localStorage.setItem('refreshToken', encryptedRefreshToken);

      const decodedToken = jwtDecode(access);
      const roleId = decodedToken.role;
      
      console.log(roleId);
      console.log('Login successful:', response.data);

      yield put(loginSuccess({ ...response.data, roleId }));
    } else {
      const errorMessage = response.data.body?.error || 'Token missing in response';
      throw new Error(errorMessage);
    }
  } 
  catch (error) {
    if (error.response) {
      console.error('Error details:', error.response.data);
    }
    yield put(loginFailure(error.message || 'Login failed'));
  }
}

function* signupSaga(action) {
  try {
    const response = yield call(SignUpEffect, action.payload);
    console.log("Saga response:", response.data.body.success);

    if (response.data.body.success) {
      yield put(registerSuccess({ ...response.data }));
    } else {
      const errorMessage = response.data.body?.error || 'Registration failed';
      throw new Error(errorMessage);
    }
  } 
  catch (error) {
    if (error.response) {
      console.error('Error details:', error.response.data);
    }
    yield put(registerFailure(error.message || 'Register failed'));
  }
}


export function* AuthSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(REGISTER_REQUEST, signupSaga);
}