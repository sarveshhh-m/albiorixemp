import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {Dimensions, Platform, View} from 'react-native';
import GlobalFont from 'react-native-global-font';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    const fontName = 'PTSansNarrow-Regular';
    GlobalFont.applyGlobal(fontName);
  }, []);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? insets.top : 0,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
      }}>
      <AppNavigator />
    </View>
  );
};

export default App;
