import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useProfile from '../hooks/useProfile';
import {Platform} from 'react-native';

const Profile = () => {
  const insets = useSafeAreaInsets();
  const {user, handleLogout} = useProfile();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: Platform.OS === 'ios' ? insets.top : 0,
      paddingBottom: insets.bottom,
    },
    topcontainer: {
      backgroundColor: '#800080',
      padding: 8,
      margin: 16,
    },
    textItems: {
      color: 'white',
      fontSize: 14,
      textAlign: 'center',
    },
    userImage: {
      height: 100,
      width: 100,
      borderRadius: 50,
      alignSelf: 'center',
    },
    logoutContainer: {flex: 1, justifyContent: 'flex-end', paddingBottom: 64},
    logoutBtn: {
      backgroundColor: '#800055',
      height: 48,
      alignSelf: 'center',
      width: '25%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9999,
    },
    logoutText: {color: 'white'},
  });

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <Image
          source={{uri: 'https://bit.ly/30gxNtN'}}
          style={styles.userImage}
        />
        <Text style={styles.textItems}>Position:- {user.position}</Text>
        <Text style={styles.textItems}>Username:- {user.username}</Text>
        <Text style={styles.textItems}>Mobile:- {user.mobile}</Text>
        <Text style={styles.textItems}>Email:- {user.email}</Text>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
