import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Logopath} from '../../assets/images';
import {Routes} from '../../navigation/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash() {
  const navigation = useNavigation();

  const getUservalue = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    // console.log(user)
    if (user) {
      setTimeout(() => {
        navigation.replace("Chat");
      }, 4000);
    } else {
      setTimeout(() => {
        navigation.replace("Login");
      }, 4000);
    }
  };

  useEffect(() => {
    getUservalue();
  }, []);
  return (
    <View style={{height:300, width:300,justifyContent:'center', alignItems:'center',flex:1}}>
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsohK43cda8kc_VkdOjjrj3Wa4Y-GcBDg_w&usqp=CAU'}} />
    </View>
  );
}
