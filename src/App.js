import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from './assets/logo/logo.svg';

export default function App() {
  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 20,
  },
});
