import AsyncStorage from '@react-native-async-storage/async-storage';

export default (key: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const value = await AsyncStorage.getItem(key);
      const jsonValue = JSON.parse(value || '{}');
      resolve(jsonValue);
    } catch (error) {
      reject(error);
    }
  });
};
