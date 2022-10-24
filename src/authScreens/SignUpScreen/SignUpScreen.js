import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const onCreateAccountPressed = () => {
    console.warn('onCreateAccountPressed');

    navigation.navigate('SignIn');
  }

  const onSignInPressed = () => {
    console.warn('Sign in');

    navigation.navigate('SignIn');
  }

  return (
    <ScrollView>
    <View style={styles.root}>
    <Text style={styles.title1}>Keep Record</Text>
      
      <CustomInput placeholder="First Name" value={firstname} setValue={setFirstName} />

      <CustomInput placeholder="Last Name" value={lastname} setValue={setLastName} />

      <CustomInput placeholder="Enter Email" value={email} setValue={setEmail} />

      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />

      <CustomInput placeholder="Confirm password" value={confirmpassword} setValue={setConfirmPassword} secureTextEntry />

      <CustomButton text="Create Account" onPress={onCreateAccountPressed} />

      <CustomButton text="Have an account? SignIn" onPress={onSignInPressed} type="TERTIARY" />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 20,
  },
  title1: {
    fontSize: 25,
    fontWeight: 'bold', 
    color: 'blue',
    margin: 10,
  },

});

export default SignUpScreen