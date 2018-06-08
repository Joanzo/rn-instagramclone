import React from 'react';
import { StyleSheet, View, Picker, Text } from 'react-native';

const DayPicker = ({ label, ...other  }) => {
  const Days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  const listItems = Days.map( d => <Picker.Item key={d} label={d} value={d} />);
  const { labelStyle, pickerStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Picker
        style={pickerStyle}
        {...other}
      >
        { listItems }
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  pickerStyle: {
    marginLeft: -5,
    marginRight: 5,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export { DayPicker };
