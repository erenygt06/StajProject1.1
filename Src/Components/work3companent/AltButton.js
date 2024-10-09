import {StyleSheet, Text, View, Dimensions,Image} from 'react-native';
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
} from '../../Asets/icons/index';
import {man, adam, adam1} from '../../Asets/image/index';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AltButton = props => {
  const{image3,image4,image5,image6}= props;
  return (
    <View style={{marginLeft:windowWidth*0.03,marginTop:windowWidth*0.09}}>
      <Image
        source={image3}
        style={{
          marginLeft: windowWidth * 0.02,
          height: windowWidth * 0.1,
          width: windowWidth * 0.1,
          tintColor: '#e2e2e2',
        }}
      />
      <Text style={{color: '#e2e2e2', fontSize: windowWidth * 0.05}}>{props.altname}</Text>
    </View>
  );
};

export default AltButton;

const styles = StyleSheet.create({});
