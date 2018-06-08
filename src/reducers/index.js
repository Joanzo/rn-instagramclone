import { combineReducers } from 'redux';
import auth from './AuthReducer';
import root from './RootReducer';
import employee from './EmployeeReducer';

export default combineReducers({
  auth,
  root,
  employee,
});