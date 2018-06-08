import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Alert = (props) => {
  const { containerStyle, textStyle } = styles;
  const { onPress, children } = props;
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'flex-start',
    color: '#cf0000',
    fontSize: 16,
    fontWeight: '600',
    padding: 10
  },
  containerStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#ffe7e7',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#cf0000',
    margin: 5
  }
});

export { Alert };
