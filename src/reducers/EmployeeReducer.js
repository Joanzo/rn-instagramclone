import { EMPLOYEE_INPUT_CHANGED, EMPLOYEE_CREATE_SUCCESS, EMPLOYEE_CREATE_FAIL } from '../actions/types';

const INITIAL_STATE = { 
  name: '', 
  phone: '',
  shift: '',
  error: '',
  fetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_INPUT_CHANGED: 
      return {
        ...state,
        [action.payload.prop]: action.payload.value   // action.payload === { prop: 'name', value: 'john' }
      };
    case EMPLOYEE_CREATE_SUCCESS:
      return {
        ...state,
        error: '',
        fetching: false
      };
    case EMPLOYEE_CREATE_FAIL:
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