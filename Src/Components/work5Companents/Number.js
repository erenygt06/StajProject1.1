import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Modal,
  visible,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
  back,
  ayakkk,
} from '../../Asets/icons/index';
import {man, adam, adam1, food, kndr} from '../../Asets/image/index';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Number = props => {
  const {name, renk} = props;
  return (
    <View
      style={{
        marginRight: windowWidth * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth * 0.12,
        height: windowWidth * 0.12,
        backgroundColor: props.renk,
        borderRadius: windowWidth * 0.3,
      }}>
      <Text style={{}}>{props.name}</Text>
    </View>
  );
};

export default Number;

const styles = StyleSheet.create({});
