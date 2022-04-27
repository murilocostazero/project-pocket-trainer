import React from 'react';
import {TouchableHighlight} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//size={} backgroundColor={} iconColor={} iconName='' handleIconButtonPress={()=> }

export default function CircleIconButton(props) {
  return (
    <TouchableHighlight
    onPress={() => props.handleIconButtonPress()}
    underlayColor={props.iconColor}  
    style={{
        backgroundColor: props.backgroundColor,
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MaterialIcons
        name={props.iconName}
        size={props.size - 8}
        color={props.iconColor}
      />
    </TouchableHighlight>
  );
}
