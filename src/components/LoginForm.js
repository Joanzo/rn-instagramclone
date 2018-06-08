import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Card, CardSection, Input, Button, Alert, ButtonSpinner } from './common';
import { emailChanged, passwordChanged, loginUser  } from '../actions';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onLoginButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser(email || '', password || '');
  }
  renderError() {
    if (this.props.error) {
      return (
        <Alert>
          {this.props.error.message}
        </Alert>
      )
    }
  }
  renderLoginButton() {
    const button = (this.props.fetching) ? (
      <ButtonSpinner size="small" />
    ) : (
      <Button onPress={this.onLoginButtonPress.bind(this)}>
        Login
      </Button>
    )
    return button;
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>

          {this.renderError()}
          {this.renderLoginButton()}

        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    fetching: state.auth.fetching
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);