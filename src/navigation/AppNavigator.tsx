import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen, SignupScreen, SplashScreen} from '../screens';
import FetchData from '../screens/FetchData';
import Profile from '../screens/Profile';
import FetchDataHeader from '../reusables/FetchDataHeader';
const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="splash">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen
          name="fetch"
          component={FetchData}
          options={{
            headerShown: true,
            header: () => <FetchDataHeader />,
          }}
        />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
