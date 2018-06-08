import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const ButtonSpinner = ({ size, color }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color={color || "#888888"} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    margin: 5,
    padding: 10
  }
});

export { ButtonSpinner };
