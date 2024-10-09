import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import '../../Routes/work4Navigation';

import LİstCompanentsStyle from './LİstCompanentsStyle';
import {man, adam, adam1, food} from '../../Asets/image/index';
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
} from '../../Asets/icons/index';
import React from 'react';
import navigation from '../../Routes/work4Navigation';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import '../../Routes/work4Navigation';
import { useNavigation } from '@react-navigation/native';
const ListCompanent = props => {
  const {name1, fiyat, image1} = props;
 // const {navigation} = props;
  const navigation = useNavigation()
  
  
  return (
    <View>
      <TouchableOpacity
        style={LİstCompanentsStyle.Buton_style}
        onPress={() => navigation.navigate('ern')}>
        <Image source={{uri:image1}} style={LİstCompanentsStyle.Buton_image} />
        <Text style={LİstCompanentsStyle.FoodNameStyle}>{name1}</Text>
        <Text>${fiyat}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListCompanent;

const styles = StyleSheet.create({});
