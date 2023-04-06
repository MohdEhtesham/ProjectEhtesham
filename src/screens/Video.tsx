import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MediaStream, RTCView} from 'react-native-webrtc'
import Button from '../screens/Callbutton';

interface props{
    hangup:()=>void;
    localStream ?:()=>MediaStream| null;
    remoteStream ?:()=>MediaStream| null;
}
function ButtonContainer(props:props){
    return(
        <View style={styles.bContainer}>
            <Button iconName='phone' backgroundColor='red' onPress={props.hangup}/>
        </View>
    )
}
export default function Video(props:props) {
    if(props.localStream && !props.remoteStream){
        return ( <View style={styles.container}>
            <RTCView 
            streamURL={props.localStream.toURL()}
            objectFit={'cover'}
            style={styles.video}
            />
             <ButtonContainer  hangup={props.hangup}/>
        </View>
        );
    }
    if(props.localStream && props.remoteStream){
        return ( <View style={styles.container}>
            <RTCView 
            streamURL={props.remoteStream.toURL()}
            objectFit={'cover'}
            style={styles.video}
            />
              <RTCView 
            streamURL={props.localStream.toURL()}
            objectFit={'cover'}
            style={styles.videolocal}
            />
             <ButtonContainer  hangup={props.hangup}/>
        </View>
        );
    }
  return (
    <ButtonContainer  hangup={props.hangup}/>
  )
}

const styles = StyleSheet.create({
bContainer:{
 flexDirection:'row', 
 bottom:30
}, 
container:{
    flex:1,
    justifyContent:'flex-end', 
    alignItems:'center'
}, 
video:{
    position:'absolute',
    width:'100%',  
    height:'100%'
}, 
videolocal:{
    position:'absolute',
    width:100,
    height:150,
    top:0,
    left:20,
    elevation:10

}

})