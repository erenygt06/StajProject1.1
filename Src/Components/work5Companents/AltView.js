import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {adam} from '../../Asets/image';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AltView = props => {
  return (
    <View>
      <View
        style={{
          marginTop: windowWidth * 0.03,
          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: 'white',
        }}>
        <Image
          source={adam}
          style={{
            width: windowWidth * 0.4,
            height: windowWidth * 0.4,
          }}
        />
      </View>
      <Text style={{color:"blue" }}>{props.yazi}</Text>
      <Text style={{color:"blue"}}>{props.fiyati}</Text>
    </View>
  );
};

export default AltView;

const styles = StyleSheet.create({});
