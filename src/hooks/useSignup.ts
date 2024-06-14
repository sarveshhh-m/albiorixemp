import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import setItem from '../utils/asyncstorage/setItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [position, setposition] = useState('');
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const changeUsername = (value: string) => {
    setUsername(value);
  };

  const changePassword = (value: string) => {
    setPassword(value);
  };

  const changeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };

  const changeMobile = (value: string) => {
    setMobile(value);
  };

  const changeEmail = (value: string) => {
    const lowercaseEmail = value.trim().toLowerCase();
    setEmail(lowercaseEmail);
  };

  const changePosition = (value: string) => {
    setposition(value);
  };

  const navigateToLogin = () => {
    navigation.navigate('login');
  };
  const regexp = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mobile: /^[0-9]{10}/,
  };
  const handleSignup = () => {
    if (
      !username ||
      !password ||
      !confirmPassword ||
      !mobile ||
      !email ||
      !position
    ) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    if (!regexp.email.test(email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }
    if (!regexp.mobile.test(mobile)) {
      Alert.alert('Error', 'Please enter a valid mobile number');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setItem('user', JSON.stringify({username, mobile, email, position}));
    navigation.navigate('profile');
  };
  return {
    insets,
    username,
    password,
    confirmPassword,
    mobile,
    email,
    position,
    changeUsername,
    changePassword,
    changeConfirmPassword,
    changeMobile,
    changeEmail,
    changePosition,
    navigateToLogin,
    handleSignup,
  };
};

export default useSignup;
