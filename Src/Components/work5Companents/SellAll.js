import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
} from '../../Asets/icons/index';
import React, {useState} from 'react';
import navigation from '../../Routes/work4Navigation';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SellAll = props => {
  //const{navigation}=props;
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity style={{}} onPress={() => navigation.navigate('ernen')}>
        <Text style={{color: 'white'}}>SellAll</Text>
        <Image
          source={remove}
          style={{
            marginRight: windowWidth * 0.02,
            width: windowWidth * 0.1,
            height: windowWidth * 0.006,
            tintColor: 'white',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SellAll;

const styles = StyleSheet.create({});
