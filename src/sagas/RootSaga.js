import { takeEvery, call, put } from 'redux-saga/effects';
import firebase from 'firebase';
import { ROOT_CHANGED, INITIALIZED } from '../actions/types';
import { changeAppRoot } from '../actions';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';


// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function watcherSaga() {
  return takeEvery(INITIALIZED, workerInit);
}


// worker saga: makes the api call when watcher saga sees the action
function* workerInit() {
  // console.log('Run Worker Init !!')
  // const { currentUser } = firebase.auth();
  // console.log('CURRENT USER: ', currentUser);
  // if (currentUser === null) {
  //   yield put({ type: ROOT_CHANGED, payload: { screen: Login.settings.screen } });
  // } else {
  //   yield put({ type: ROOT_CHANGED, payload: { screen: Dashboard.settings.screen } });
  // }
  //yield call(changeAppRoot, Dashboard.settings.screen); // CURRENTLY NOT WORKING
  yield put({ type: ROOT_CHANGED, payload: { route: Dashboard.settings.screen } });
  // Suppose to check all login cached function here
  // dispatch to go to login page
  
}
