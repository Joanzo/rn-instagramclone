import Dashboard from './Dashboard';
import EmployeeCreateScreen from './EmployeeCreateScreen';
import Login from './Login';

export const getNavScreen = (screen) => {
  let components = {
    [Dashboard.settings.screen]: Dashboard.settings,
    [Login.settings.screen]: Login.settings,
    [EmployeeCreateScreen.settings.screen]: EmployeeCreateScreen.settings,
  };
  console.log(components);
  return components[screen]
};
