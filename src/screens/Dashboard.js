import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  Button,
  View
} from 'react-native';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreateScreen from './EmployeeCreateScreen';
import firebase from 'firebase';


export default class Dashboard extends Component {
  static settings = {
    screen: 'home.dashboard',
    title: 'Dashboard',
    navigatorButtons: {
      rightButtons: [
        {
          title: 'Add',
          id: 'add-employee',
          buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
          buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
        },
      ],
      fab: {
        collapsedId: 'share',
        collapsedIcon: require('../../img/edit.png'),
        expendedId: 'clear',
        expendedIcon: require('../../img/edit.png'),
        backgroundColor: '#ff505c',
        actions: [
          {
            id: 'mail',
            icon: require('../../img/edit.png'),
            backgroundColor: '#03A9F4'
          },
          {
            id: 'delete',
            icon: require('../../img/delete.png'),
            backgroundColor: '#4CAF50'
          }
        ]
      },
    }
  }

  onAddEmployeePress = () => {
    this.props.push(EmployeeCreateScreen.settings.screen);

    // this.props.navigator.push({
    //   ...EmployeeCreateScreen.settings,
    //   // suppose to be overide based on custom arguments
    // });
    //   {
    //   screen: 'employee.create',
    //   title: 'Employee Create'
    //   title: `Screen ${this.props.count || 1}`,
    //   passProps: {
    //     count: this.props.count ? this.props.count + 1 : 2
    //   }
    // });
  };

  componentDidMount() {
    console.log('FIREBASE.AUTH: ', firebase.auth());
    this.props.navigator.setOnNavigatorEvent((e) => {
      console.log('props.navigator.setOnNavigatorEvent e: ', e)
      if (e.type == 'NavBarButtonPress') { // this is the event type for button presses
        if (e.id == 'add-employee') { // this is the same id field from the static navigatorButtons definition
          this.onAddEmployeePress();
        }

      }
    });
  }
  render() {
    console.log('this.props Dashboard: ', this.props);
    return (
        <View style={{flex: 1}}>
            <EmployeeList></EmployeeList>
        </View>
        
    );
  }

}