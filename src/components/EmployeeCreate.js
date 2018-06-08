import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Alert, ButtonSpinner, DayPicker } from './common';
import { employeeInputChanged, employeeCreate } from '../actions';


class EmployeeCreate extends Component {
  onCreateButtonPress() {
    const { name, phone, shift } = this.props;
    const user = {
      name,
      phone,
      shift: shift || 'Monday'
    }
    this.props.employeeCreate(user);
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
  renderCreateButton() {
    const button = (this.props.fetching) ? (
      <ButtonSpinner size="small" />
    ) : (
      <Button onPress={this.onCreateButtonPress.bind(this)}>
        Create
      </Button>
    )
    return button;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John"
            onChangeText={value => this.props.employeeInputChanged({prop: 'name', value})}
            value={this.props.name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            onChangeText={value => this.props.employeeInputChanged({prop: 'phone', value})}
            value={this.props.phone}
          />
        </CardSection>
        <CardSection>
          <DayPicker 
            label='Shift'
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeInputChanged({ prop: 'shift', value})}
          />
        </CardSection>
        <CardSection>

          {this.renderError()}
          {this.renderCreateButton()}

        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employee;

  return {
    name,
    phone,
    shift,
    error: state.employee.error,
    fetching: state.employee.fetching
  }
}

export default connect(mapStateToProps, { employeeInputChanged, employeeCreate })(EmployeeCreate);