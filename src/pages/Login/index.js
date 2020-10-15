import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';

const Login = () => {
  return (
    <View style={styles.page}>
      <Gap height={20} />
      <ILLogo />
      <Gap height={50} />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Gap height={50} />
      <Input label="Email" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link />
      <Gap height={40} />
      <Button title="Login" onPress={() => alert('hello')} />
      <Gap height={30} />
      <Link />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    margin: 40,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    width: 230,
    fontSize: 26,
    color: '#112340',
  },
  logo: {
    width: 100,
    height: 89,
  },
});
