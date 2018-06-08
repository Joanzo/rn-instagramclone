import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types';

const INITIAL_STATE = { 
  email: '', 
  password: '',
  user: null,
  error: '',
  fetching: false
};

export default (state = INITIAL_STATE, action) => {
  console.log('action type on reducer: ', action.type);
  console.log('action payload on reducer: ', action.payload);
  switch (action.type) {
    case EMAIL_CHANGED: 
      return {
        ...state,
        email: action.payload 
      };
    case PASSWORD_CHANGED: 
      return {
        ...state,
        password: action.payload 
      };
    case LOGIN_USER:
      return {
        ...state,
        fetching: true,
        error: '',
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: '',
        fetching: false
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false,
        password: '' // reset password when fail to login
      };
    default: 
      return state;
  }
};