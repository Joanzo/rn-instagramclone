import { EMPLOYEE_INPUT_CHANGED, EMPLOYEE_CREATE } from './types';

export const employeeInputChanged = ({ prop, value }) => {
  return {
    type: EMPLOYEE_INPUT_CHANGED,
    payload: { prop, value }
  }
};

export const employeeCreate = (user) => {
  console.log(user);
  return {
    type: EMPLOYEE_CREATE,
    payload: user
  }
};