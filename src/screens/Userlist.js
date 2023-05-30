import {View, Text, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Avatar} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firebase from './firebaseConfig';

const Userlist = ({navigation}) => {
  console.log('==========abcdefghijklmnopqrstuv');
  const signOutNow = () => {
    console.log('==========abcdefghijklmnopqrstuv');
    auth()
      .signOut()
      .then(() => {
        navigation.replace('Login');
        AsyncStorage.clear();
      });
  };

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

//   firebase
// auth()
//     .listUsers()
//     .then(userRecords => {
//       userRecords.forEach(user => {
//         // Fetch user data from Firebase Realtime Database
//         firebase
//           .database()
//           .ref('users/' + user.uid)
//           .once('value')
//           .then(snapshot => {
//             const userData = snapshot.val();
//             console.log(userData);
//           })
//           .catch(error => {
//             console.log('Error fetching user data:', error);
//           });
//       });
//     })
//     .catch(error => {
//       console.log('Error fetching user IDs:', error);
//     });
  return (
    <View>
      <Text>Userlist</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Chat');
        }}>
        <Text>chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Userlist;
