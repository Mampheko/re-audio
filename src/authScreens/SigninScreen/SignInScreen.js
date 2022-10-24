import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Home');
  };

  const onSignUpPressed = () => {
    console.warn('onSignUpPressed');

    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title1}>Keep Record</Text>
    
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />

      <CustomButton text="Log in Account" onPress={onSignInPressed} />

      <CustomButton text="Don't have an account? SignUp" onPress={onSignUpPressed} type="TERTIARY" />

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

export default SignInScreen