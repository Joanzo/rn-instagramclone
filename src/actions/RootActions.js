import { 
  ROOT_CHANGED,
  SCREEN_NAVIGATE,
  SCREEN_POP,
  SCREEN_ERROR
} from './types';

export function changeAppRoot(route) {
  console.log('ROUTE: ', route);
  return {
    type: ROOT_CHANGED, 
    payload: {
      route
    }
  };
}

/**
 * Navigate to a new page, preserving the backstack.
 */
export function push (newScreen) {
  return {
    type: SCREEN_NAVIGATE,
    payload: {
      screen: newScreen,
      isReset: false
    }
  }
}

/**
 * Navigate to a new page and clear the backstack.
 */
export function resetTo (newScreen) {
  return {
    type: SCREEN_NAVIGATE,
    payload: {
      screen: newScreen,
      isReset: false
    }
  }
}

/**
 * Internal helper method for setting the redux state
 */
// function navigate (newScreen, reset) {
//   return {
//     type: SCREEN_NAVIGATE,
//     screen: newScreen,
//     isReset: reset
//   }
// }

/**
 * Pop the current page
 */
export function pop() {
  return {
    type: SCREEN_POP
  }
}

/**
 * Show error message
 */
export function showError() {
  return {
    type: SCREEN_ERROR
  }
}

/** Navigator **/
// export type NavigatorStateType = {
//   screen: string, // Unique string ID for each navigable component
//   isReset: boolean, // Set true to clear the backstack when navigating to the new screen
//   backstack: Array<string>, // Data structure to keep track of the backstack, used when popping
//   isPop: boolean // Indicates that this is a pop operation,
//   showError: boolean // Use the navigator's showInAppNotification API to display an error
// }