import {useEffect, useState} from 'react';
import getItem from '../utils/asyncstorage/getItem';
import {useNavigation} from '@react-navigation/native';
import removeAll from '../utils/asyncstorage/removeAll';

const useProfile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<{
    username: string;
    email: string;
    mobile: string;
    position: string;
  }>({username: '', email: '', mobile: '', position: ''});
  useEffect(() => {
    getItem('user')
      .then((value: any) => {
        setUser(value);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleLogout =  () => {
    removeAll();
    navigation.navigate('splash');
  };
  return {
    user,
    handleLogout,
  };
};

export default useProfile;
