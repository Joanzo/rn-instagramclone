// @flow
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import * as navigationActions from '../actions/RootActions'
import { getNavScreen } from './Utils'


class EazeCompositor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: true
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  /**
   * If a backstack is present, it is possible to trigger push/pop/reset multiple times.
   * This keeps track of the currently visible screen and ensures that only it currently executes navigation.
   */
  onNavigatorEvent (event) {
    switch (event.id) {
      case 'didAppear':
        this.setState({isVisible: true})
        break
      case 'didDisappear':
        this.setState({isVisible: false})
        break
    }
  }
  
  shouldComponentUpdate (nextProps, nextState) {

    const DEFAULT_SETTINGS = {
      overrideBackPress: true
    }


    console.log('SHOULD COMPONET UPDATE EZCOMPOSITOR: ', nextProps, 'NEXT STATE: ', nextState);
    if (nextState.isVisible) {
      // Check if we are displaying an in-app error notification
      if (nextProps.showError) {
        // Error message is pulled from redux store
        //this.props.navigator.showInAppNotification({screen: pages.ERROR})
        return true
      }
      // Check if we're to perform a pop
      if (nextProps.isPop) {
        this.props.navigator.pop()
        return true
      }
      // Otherwise, if next screen is different from current, push or reset
      if (nextProps.screen !== this.props.screen) {
        if (nextProps.isReset) {
          this.props.navigator.resetTo({
            ...getNavScreen(nextProps.screen),
            ...DEFAULT_SETTINGS
          })
        } else {
          this.props.navigator.push({
            ...getNavScreen(nextProps.screen), 
            ...DEFAULT_SETTINGS
          })
        }
        return true
      }
    }
    return false

  }

  /**
   * Copy props to all child nodes
   */
  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        screen: this.props.screen,
        backstack: this.props.backstack,
        isReset: this.props.isReset,
        isPop: this.props.isPop,
        push: this.props.push,
        resetTo: this.props.resetTo,
        pop: this.props.pop
      })
    })
  }

  render () {
    return (
      <View style={{flex: 1}}>
        {this.renderChildren()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    screen: state.root.screen,
    backstack: state.root.backstack,
    isReset: state.root.isReset,
    isPop: state.root.isPop,
    showError: state.root.showError
  }
}

const mapDispatchToProps = (dispatch) => {
  // We do not call these directly from EazeCompositor; instead here we use this.props.navigator.
  // These methods update the redux store and then EazeCompositor actually responds to that navigation request.
  // We wrap these in mapDispatchToProps for the purpose of passing these actions to the child component.
  return {
    push: (screen) => dispatch(navigationActions.push(screen)),
    resetTo: (screen) => dispatch(navigationActions.resetTo(screen)),
    pop: () => dispatch(navigationActions.pop())
  }
}


const reduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EazeCompositor)

export default reduxContainer