import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  // const overideStyle = () => {
  //   return [
  //     styles.containerStyle,
  //     {flexDirection: props.flexDirection || 'column'}
  //   ]
  // }
  // console.log(props)
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flex: 0,
    borderColor: '#ddd',
    position: 'relative',
  }
});

export { CardSection };
