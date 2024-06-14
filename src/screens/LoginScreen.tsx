import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import constants from '../constants';
import useLogin from '../hooks/useLogin';
import Input, {PasswordInput} from '../reusables/Input';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LoginScreen = () => {
  const {
    navigateToSignup,
    changePassword,
    changeUsername,
    password,
    username,
    handleLogin,
  } = useLogin();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'ios' ? insets.top : 0},
      ]}>
      <Image
        source={{uri: constants.loginImg}}
        style={styles.userImage}
        resizeMode="contain"
      />
      <Text style={styles.headingText}>Albiorix Employees</Text>
      <KeyboardAvoidingView
        keyboardVerticalOffset={48}
        behavior="padding"
        style={styles.inputContainer}>
        <Input
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'white'}
          value={username}
          onChangeText={changeUsername}
        />
        <PasswordInput
          style={styles.passInput}
          placeholder="Password"
          placeholderTextColor={'white'}
          value={password}
          onChangeText={changePassword}
          iconColor="white"
        />
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.72} onPress={navigateToSignup}>
        <Text style={styles.navToSignupBtn}>Not an employee? Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    backgroundColor: '#800080',
    width: '100%',
    marginVertical: 8,
    height: 48,
    paddingHorizontal: 12,
    justifyContent: 'center',
    color: 'white',
  },
  btnContainer: {
    backgroundColor: '#800055',
    marginVertical: 8,
    borderRadius: 9999,
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: 'PTSansNarrow-Bold',
  },
  navToSignupBtn: {color: 'grey'},
  inputContainer: {width: '100%'},
  headingText: {
    color: 'black',
    fontFamily: 'PTSansNarrow-Bold',
    fontSize: 24,
    marginTop: 10,
  },
  userImage: {
    height: 150,
    width: '100%',
  },
  passInput: {backgroundColor: '#800080', paddingHorizontal: 12},
});
export default LoginScreen;
