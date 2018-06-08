import firebase from 'firebase';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, ROOT_CHANGED } from '../actions/types';
import Dashboard from '../screens/Dashboard';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function watcherSaga() {
  return takeLatest(LOGIN_USER, workerLogin);
}
/*
// function that makes the api request and returns a Promise for response
function fetchUser() {
  return fetch('https://rallycoding.herokuapp.com/api/music_albums');
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchUser);
    response.json().then(function(data) {
      console.log(data);
      //put({ type: LOGIN_USER_SUCCESS, payload: data });
    })
    .catch(function(error) {
      //put({ type: LOGIN_USER_FAIL, payload: error });
      console.log('ERROR FROM RESPONSE (JSON RETURN ERROR): ', error);
    })
  } catch (error) {
    console.log('ERROR FROM TRY CATCH (NETWORK ERROR):', error);
  }
}
*/

/*
// function that makes the api request and returns a Promise for response
function fetchUser() {
  return (fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then( response => response.json() )
    .then( payload => ({ success: true, payload }) )
    .catch( payload => ({ success: false, payload }) )
  );
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  const response = yield call(fetchUser);
  if (response.success) {
    yield put({ type: LOGIN_USER_SUCCESS, payload: response.payload });
  } else {
    yield put({ type: LOGIN_USER_FAIL, payload: response.payload });
  }
}
*/


// function that makes the api request and returns a Promise for response
function login({email, password}) {
  return (firebase.auth().signInWithEmailAndPassword(email, password)
    .then( payload => ({ success: true, payload }) )
    .catch( payload => {
      return { success: false, payload };
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( data => ({ success: true, payload }) )
        .catch( data => ({ success: false, payload }) )
    })
  );
}

// worker saga: makes the api call when watcher saga sees the action
function* workerLogin(action) {
  const response = yield call(login, action.payload);
  const { success, payload } = response;

  if (success) {
    yield put({ type: LOGIN_USER_SUCCESS, payload: payload });
    yield put({ type: ROOT_CHANGED, payload: {screen: Dashboard.settings.screen, action: null } });
  } else {
    yield put({ type: LOGIN_USER_FAIL, payload: payload });
  }
}
