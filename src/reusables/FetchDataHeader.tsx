import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const FetchDataHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0384fc',
        height: 48,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('login');
        }}>
        <AntDesign name="left" size={24} color="white" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          fontFamily:'PTSansNarrow-Bold',
          textAlign: 'center',
          color: 'white',
        }}>
        FetchData JSON
      </Text>
      <View style={{height: 24, width: 24}} />
    </View>
  );
};

export default FetchDataHeader;
