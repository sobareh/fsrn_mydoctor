import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Gap from '../Gap';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <Gap height={6} />
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 10,
    padding: 12,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    color: '#7d8797',
  },
});
