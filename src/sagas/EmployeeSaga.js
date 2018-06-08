import firebase from 'firebase';
import { takeLatest, call, put } from 'redux-saga/effects';
import { EMPLOYEE_CREATE, EMPLOYEE_CREATE_SUCCESS, EMPLOYEE_CREATE_FAIL, ROOT_CHANGED } from '../actions/types';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function watcherSaga() {
  return takeLatest(EMPLOYEE_CREATE, workerCreate);
}


// function that makes the api request and returns a Promise for response
function employeeCreate(user) {
  const { currentUser } = firebase.auth();
  return (firebase.database().ref(`users/${currentUser.uid}/employees`)
    .push(user)
    .then( payload => ({ success: true, payload }) )
    .catch( payload => {
      return { success: false, payload };
    })
  );
  // return (firebase.auth().signInWithEmailAndPassword(email, password)
  //   .then( payload => ({ success: true, payload }) )
  //   .catch( payload => {
  //     return { success: false, payload };
  //     firebase.auth().createUserWithEmailAndPassword(email, password)
  //       .then( data => ({ success: true, payload }) )
  //       .catch( data => ({ success: false, payload }) )
  //   })
  // );
}

// worker saga: makes the api call when watcher saga sees the action
function* workerCreate(action) {
  const response = yield call(employeeCreate, action.payload);
  const { success, payload } = response;

  if (success) {
    yield put({ type: EMPLOYEE_CREATE_SUCCESS, payload: payload });
    yield put({ type: ROOT_CHANGED, payload: {route: Dashboard.settings.screen} });
  } else {
    yield put({ type: EMPLOYEE_CREATE_FAIL, payload: payload });
  }
}
