import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import Login from './Login';
import Dashboard from './Dashboard';
import EmployeeCreateScreen from './EmployeeCreateScreen';
import ScreenWrapper from './ScreenWrapper';


// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  registerScreen(Login, store, Provider);
  registerScreen(Dashboard, store, Provider);
  registerScreen(EmployeeCreateScreen, store, Provider);

  // Navigation.registerComponent(Login.settings.screen, () => Login, store, Provider);
  // Navigation.registerComponent(Dashboard.settings.screen, () => Dashboard, store, Provider);
  // Navigation.registerComponent(EmployeeCreateScreen.settings.screen, () => EmployeeCreateScreen, store, Provider);
}

/**
 * Internal function to register an individual screen.
 * We break this out into a function to use typechecking with flow.
 */
export function registerScreen (pageMapItem, store, Provider) {
  Navigation.registerComponent(pageMapItem.settings.screen, () => makeContainer(pageMapItem), store, Provider)
}

export function makeContainer (containerToWrap) {
  const WrappedContainer = containerToWrap

  return class extends Component {
    // Styling react-native-navigation is done with static fields
    // static navigatorStyle = eazeNavigatorStyle
    // static navigatorButtons = eazeNavigatorButtons
    render () {
      return (
        <ScreenWrapper {...this.props}>
          <WrappedContainer {...this.props} />
        </ScreenWrapper>
      )
    }
  }
}