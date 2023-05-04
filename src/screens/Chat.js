import React, {useEffect, useCallback, useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);

  const signOutNow = () => {
    console.log('==========abcdefghijklmnopqrstuv');
    auth()
      .signOut()
      .then(() => {
        navigation.replace('Login');
        AsyncStorage.clear()
      });
  };

  useEffect(()=>{
    // const user= AsyncStorage.setItem('user',JSON.parse(userCredential));  
  },[])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{marginLeft: 20}}>
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL,
            }}
          />
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
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  useEffect(() => {
    firestore()
      .collection('chats')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
        });
      });
  }, []);
  const storedata = item => {
    console.log(item[0]?.user?._id);
    firestore()
      .collection('chats')
      .doc(item[0]?.user?._id)
      .collection(item[0]?.user?._id)
      .add(item[0])
      .then(() => {
        console.log('User added!');
      });
  };

  const onSend = messagesArray => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messagesArray),
    );
    // const { _id, createdAt, text, user,} = messages[0]
    //  storedata(messages)
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
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
