import React, {useEffect, useCallback, useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [Userdetails, setUserDetails] = useState({});

  useEffect(() => {
    getUservalue();
  }, []);
  const signOutNow = () => {
    console.log('==========abcdefghijklmnopqrstuv');
    auth()
      .signOut()
      .then(() => {
        navigation.replace('Login');
        AsyncStorage.clear();
      });
  };

  const getUservalue = async () => {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    setUserDetails(user);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{marginLeft: 20, flexDirection:'row'}}>
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL,
            }}
          />
           <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={()=>navigation.navigate("Userlist")}>
          <Text>logout</Text>
        </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={signOutNow}>
          <Text>logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const querySnapshot = firestore()
      .collection('chats')
      .doc('123456')
      .collection('messages')
      .orderBy('createdAt',"desc");
      querySnapshot.onSnapshot(querySnapshot=>{
        const allMsg= querySnapshot.docs.map((docSnap)=>{
          const data=docSnap.data();
          return{
            ...docSnap.data(),
            createdAt:new Date(),
          }
        })
        setMessages(allMsg)
      })
  }, []);

  const onSend = messagesArray => {
    console.log(messagesArray, 'ehteshammm');
    const msg = messagesArray[0];
    const myMsg = {
      ...msg,
      senderId: Userdetails.uid,
      reciverId: '2',
    };

    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection('chats')
      .doc('123456')
      .collection('messages')
      .add({
        ...myMsg,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: Userdetails.uid,
      }}
      renderBubble={props => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: 'green',
              },
            }}
          />
        );
      }}
    />
  );
};

export default Chat;
