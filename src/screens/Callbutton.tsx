import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface props {
  onPress?: any;
  iconName: string;
  backgroundColor: string;
  style?: any;
}

export default function Callbutton(props: props) {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={[
          {backgroundColor: props.backgroundColor},
          props.style,
          styles.button,
        ]}>
        <Icon name={props.iconName} color="white" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    elevation: 10,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:30
  },
});
