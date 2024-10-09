import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
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

import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AltButtonnnn = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: windowWidth * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: windowWidth * 0.05,
        marginRight: windowWidth * 0.05,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Image
          source={home}
          style={{
            width: windowWidth * 0.1,
            height: windowWidth * 0.1,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('two')}>
        <Image
          source={cart}
          style={{
            width: windowWidth * 0.1,
            height: windowWidth * 0.1,
          }}
        />
      </TouchableOpacity>
      <Image
        source={zoom}
        style={{
          width: windowWidth * 0.1,
          height: windowWidth * 0.1,
        }}
      />
      <Image
        source={catogories}
        style={{
          width: windowWidth * 0.1,
          height: windowWidth * 0.1,
        }}
      />
      <Image
        source={user}
        style={{
          width: windowWidth * 0.1,
          height: windowWidth * 0.1,
        }}
      />
    </View>
  );
};

export default AltButtonnnn;

const styles = StyleSheet.create({});
