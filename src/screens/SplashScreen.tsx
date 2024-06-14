import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.splashText}>Albiorix Employees</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    fontSize: 24,
    color: 'white',
  },
});
export default SplashScreen;
