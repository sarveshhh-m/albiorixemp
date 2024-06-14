import AsyncStorage from '@react-native-async-storage/async-storage';

export default async (key: string, value: string) => {
  AsyncStorage.setItem(key, value, () => {});
};
