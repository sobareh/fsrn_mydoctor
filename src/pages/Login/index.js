import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';

const Login = () => {
  return (
    <ScrollView style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Login" onPress={() => alert('hello')} />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    marginVertical: 40,
    fontSize: 24,
    lineHeight: 24,
    maxWidth: 210,
    color: colors.text.primary,
  },
});
