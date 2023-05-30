import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import { createUserWithEmailAndPassword, getAdditionalUserInfo, updateProfile } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Register = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userDetails, setUserDtails] = useState([]);




    const register = () => {
  auth().createUserWithEmailAndPassword( email, password)
    .then((userCredential) => {
     console.log("ehteshamsignin Value", userCredential)
      setUserDtails([userCredential])
        // Registered
        userInfo()
    //  navigation.navigate("Login", {"userCredential":userCredential})
     
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
}
const userInfo =()=>{
    firestore()
    .collection('allUser')
    .doc('User')
    .add({
     userDetails
    });

}

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your name'
                label='Name'
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder='Enter your email'
                label='Email'
                autoCapitalize='none'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label='Password'
                value={password} onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            {/* <Input
                placeholder='Enter your image url'
                label='Profile Picture'
                value = {avatar}
                onChangeText={text => setAvatar(text)}
            /> */}
           <Button title='register' onPress={register} style={styles.button} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginTop: 100,
    },
    button: {
        width: 370,
        marginTop: 10
    }
});

export default Register;