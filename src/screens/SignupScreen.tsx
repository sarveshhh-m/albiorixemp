import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import useSignup from '../hooks/useSignup';
import Input, {PasswordInput} from '../reusables/Input';
import SelectDropdown from 'react-native-select-dropdown';
import constants from '../constants';

const SignupScreen = () => {
  const {
    handleSignup,
    changeConfirmPassword,
    changeEmail,
    changeMobile,
    changePassword,
    changeUsername,
    changePosition,
    navigateToLogin,
    username,
    confirmPassword,
    email,
    mobile,
    password,
    insets,
  } = useSignup();

  return (
    <View
      style={[
        styles.container,
        {paddingTop: Platform.OS === 'ios' ? insets.top : 0},
      ]}>
      <Text style={styles.title}>Albiorix Employee</Text>
      <Image source={{uri: 'https://bit.ly/30gxNtN'}} style={styles.image} />
      <Input
        placeholder="Username"
        value={username}
        onChangeText={changeUsername}
      />
      <PasswordInput
        placeholder="Password"
        value={password}
        onChangeText={changePassword}
      />
      <PasswordInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={changeConfirmPassword}
      />
      <Input placeholder="Mobile" value={mobile} onChangeText={changeMobile} />
      <Input placeholder="Email" value={email} onChangeText={changeEmail} />
      <SelectDropdown
        data={constants.empData}
        onSelect={item => changePosition(item.label)}
        renderButton={selectedItem => (
          <View style={styles.button}>
            <Text style={styles.dropdownItemText}>
              {selectedItem ? selectedItem.label : 'select position'}
            </Text>
          </View>
        )}
        renderItem={item => (
          <View style={styles.dropdownItem}>
            <Text style={styles.dropdownItemText}>{item.label}</Text>
          </View>
        )}
        dropdownStyle={styles.dropdown}
      />
      <TouchableOpacity onPress={handleSignup} style={styles.signupButton}>
        <Text style={styles.signupButtonText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.72} onPress={navigateToLogin}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 4,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: 'PTSans-Bold',
    color: 'white',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  signupButton: {
    paddingHorizontal: 24,
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 9999,
    paddingVertical: 16,
  },
  signupButtonText: {
    color: '#800080',
    fontSize: 14,
    fontFamily: 'PTSansNarrow-Bold',
  },
  loginText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    height: 48,
    justifyContent: 'center',
    paddingLeft: 12,
    width: '100%',
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: '#800080',
    borderWidth: 1,
  },
  dropdownItem: {
    height: 32,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  dropdownItemText: {
    color: '#800080',
    textTransform: 'capitalize',
    fontFamily: 'PTSansNarrow-Regular',
  },
});

export default SignupScreen;
