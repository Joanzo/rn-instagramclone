import { all, call } from 'redux-saga/effects';
import LoginSaga from './LoginSaga';
import RootSaga from './RootSaga';
import EmployeeSaga from './EmployeeSaga';


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    LoginSaga(),
    RootSaga(),
    EmployeeSaga(),
  ])
};
