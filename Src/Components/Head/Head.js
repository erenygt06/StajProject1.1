import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
  camera,
  user,
  cart,
  catogories,
  home,
} from '../../Asets/icons/index';
const Head = props => {
  const [text, onChangeText] = React.useState('Şehir giriniz');

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: windowWidth * 0.05}}>
          <TextInput
            style={{
              height: windowWidth * 0.1,
              width: windowWidth * 0.75,
              borderWidth: 1,
              borderRadius: windowWidth * 0.03,
              backgroundColor: '#a0a0a0',
            }}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <Image
          source={catogories}
          style={{
            marginTop: windowWidth * 0.02,
            width: windowWidth * 0.07,
            height: windowWidth * 0.07,
            marginLeft: windowWidth * 0.1,
          }}
        />
      </View>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({});
