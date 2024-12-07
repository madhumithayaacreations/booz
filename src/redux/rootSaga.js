import { all } from 'redux-saga/effects';
import { AuthSaga } from './auth/AuthSaga';

export default function* rootSaga() {
  yield all([
    AuthSaga(), 
  ]);
}
