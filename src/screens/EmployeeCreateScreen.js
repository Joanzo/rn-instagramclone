import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  Button,
  View
} from 'react-native';
import { connect } from 'react-redux';
import EmployeeCreate from '../components/EmployeeCreate';

class EmployeeCreateScreen extends Component {
  static settings = {
    screen: 'employee.create',
    title: 'Employee Create',
    leftButtons: [
      {
        id: 'backWithCheck',
        icon: require('../../img/swap.png'),
      }
    ]
  }

  componentWillReceiveProps(nextProps) {
    console.log('EmployeeCreateScreen Props: ', this.props);
    console.log('EmployeeCreateScreen Props: ', nextProps);
  }

  componentDidMount() {
    this.props.navigator.setOnNavigatorEvent((e) => {
      console.log('props.navigator.setOnNavigatorEvent e: ', e)
      if (e.type == 'NavBarButtonPress') { // this is the event type for button presses
        if (e.id == 'backWithCheck') { // this is the same id field from the static navigatorButtons definition
          this.props.pop();
        }
      }
    });
  }

  render() {
    return (
        <View style={{flex: 1}}>
            <EmployeeCreate />
        </View>
        
    );
  }

}

const mapStateToProps = state => {
  const { route, action } = state.root;
  return {
    route,
    action
  }
}

export default connect(mapStateToProps)(EmployeeCreateScreen);