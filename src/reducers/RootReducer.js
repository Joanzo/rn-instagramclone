// import { ROOT_CHANGED, INITIALIZED } from '../actions/types';

// const INITIAL_STATE = { 
//   route: null, // 'login' / 'after-login'
//   action: null,
// };

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ROOT_CHANGED: 
//       return {
//         ...state,
//         route: action.payload.route,
//         action: action.payload.action
//       };
//     default: 
//       return state;
//   }
// };



import { 
  ROOT_CHANGED,
  SCREEN_NAVIGATE,
  SCREEN_POP,
  SCREEN_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  route: '',
  screen: '',
  isReset: false,
  backstack: [],
  isPop: false,
  showError: false
}

const navigation = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOT_CHANGED: 
      return {
        ...state,
        route: action.payload.route,
      };
    case SCREEN_NAVIGATE:
      const isReset = action.payload.isReset
      const nextScreen= action.payload.screen
      let newBackstack = state.backstack
      newBackstack.push(nextScreen)
      return Object.assign({}, state, {
        screen: nextScreen,
        isReset: isReset,
        backstack: isReset ? [nextScreen] : newBackstack,
        isPop: false,
        showError: false
      })

    case SCREEN_POP:
      let poppedBackstack = state.backstack
      poppedBackstack.pop()
      const newScreen = poppedBackstack[poppedBackstack.length - 1]
      return Object.assign({}, state, {
        screen: newScreen,
        isReset: false,
        backstack: poppedBackstack,
        isPop: true,
        showError: false
      })

    case SCREEN_ERROR:
      return Object.assign({}, state, {
        showError: true
      })

    default:
      return state
  }
}

export default navigation