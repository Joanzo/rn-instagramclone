import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED, 
  LOGIN_USER,
  INITIALIZED,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = (email, password) => {
  return {
    type: LOGIN_USER,
    payload: {
      email,
      password
    }
  }
};

export function initialized() {
  return {
    type: INITIALIZED,
    payload: null
  };
}