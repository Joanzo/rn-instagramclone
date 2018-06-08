import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  Button,
  View
} from 'react-native';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
  static settings = {
    screen: 'user.login',
    title: 'Welcome',
    navigatorStyle: {
      navBarHidden: true
    },
  }

  render() {
    return (
        <View style={{flex: 1}}>
            <LoginForm />
        </View>
        
    );
  }

}