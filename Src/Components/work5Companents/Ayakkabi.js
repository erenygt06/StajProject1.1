import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import '../../Routes/work4Navigation';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import '../../Routes/work4Navigation';
import {useNavigation} from '@react-navigation/native';
const Ayakkabi = props => {
  const {name1, fiyat, image1} = props;
  return (
    <View>
      <TouchableOpacity
        style={{
          width: props.Ayakkabiuzunluk,
          height: props.Ayakkabigenislik,
          backgroundColor: 'white',
        }}>
        <Image
          source={{uri: image1}}
          style={{
            width:windowWidth*0.9,
            height:windowWidth*0.55,
          }}
        />
        
      </TouchableOpacity>
    </View>
  );
};

export default Ayakkabi;

const styles = StyleSheet.create({});
