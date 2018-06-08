import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';



class EmployeeList extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Card>
            <CardSection>
              <Text>Employee List</Text>
            </CardSection>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card>
            <CardSection>
              <Text>Employee List</Text>
            </CardSection>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card>
            <CardSection>
              <Text>Employee List</Text>
            </CardSection>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card>
            <CardSection>
              <Text>Employee List</Text>
            </CardSection>
          </Card>
        </TouchableOpacity>
      </View>
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

export default EmployeeList;
//export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);