import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const changeUsername = (value: string) => {
    setUsername(value);
  };

  const changePassword = (value: string) => {
    setPassword(value);
  };
  const navigateToSignup = () => {
    navigation.navigate('signup');
  };

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    if (
      username.toLowerCase() !== 'Albi_Flutter_001' &&
      password !== 'Welcome1!'
    ) {
      Alert.alert('Error', 'Invalid username or password');
      return;
    }
    navigation.navigate('fetch');
  };
  return {
    username,
    password,
    navigateToSignup,
    changePassword,
    changeUsername,
    handleLogin,
  };
};

export default useLogin;
