import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

type InputProps = {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
};
type PasswordInputProps = {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  iconColor?: string;
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  input: {
    backgroundColor: 'white',
    color: '#800080',
    height: 48,
    width: '100%',
    paddingLeft: 12,
  },
  passwordInputContainer: {
    width: '100%',
  },
  iconStyle: {
    position: 'absolute',
    top: 16,
    right: 12,
  },
});

const Input = ({
  placeholder = 'Placeholder',
  value,
  onChangeText,
  ...rest
}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#800080'}
        {...rest}
      />
    </View>
  );
};

export const PasswordInput = ({
  placeholder,
  onChangeText,
  value,
  iconColor = '#800080',
  ...rest
}: PasswordInputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <View style={[styles.inputContainer, styles.passwordInputContainer]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={'#800080'}
        {...rest}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={styles.iconStyle}>
        <Entypo
          name={secureTextEntry ? 'eye' : 'eye-with-line'}
          size={18}
          color={iconColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
