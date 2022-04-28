import React from 'react';
import { ActivityIndicator, Text, TouchableHighlight } from 'react-native';
import general from '../../styles/general.styles';

//label='' backgroundColor={} handleFlatButtonPress={() => {}} onLoading={}

export default function FlatButton(props) {
  return (
    <TouchableHighlight
        onPress={() => props.handleFlatButtonPress()}
        underlayColor='transparent'
        style={{
            backgroundColor: props.backgroundColor,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
            height: 56,
            marginVertical: 16
        }} >
        {
          props.onLoading ?
          <ActivityIndicator size="large" color="#FFF" /> :
          <Text style={general.primaryLightText}>{props.label}</Text>
        }
    </TouchableHighlight>
  )
}