import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../screens/Callbutton';

interface props {
  hangup: () => void;
  join: () => void;
}
export default function GettingCall(props: props) {
  return (
    <View style={styles.container}>
      <Image source={require('../Image/images.jpeg')} style={styles.img}/>
      <View style={styles.bContainer}>
     <Button  iconName="phone" backgroundColor="green" 
     onPress={props.join}
     style={{marginRight:50, marginBottom:30,}}/>

<Button  iconName="phone" backgroundColor="red" 
     onPress={props.hangup}
     style={{marginRight:20, marginBottom:30,}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bContainer:{
flexDirection:'row', 
justifyContent:'center', 
alignItems:'center'
  }
});
