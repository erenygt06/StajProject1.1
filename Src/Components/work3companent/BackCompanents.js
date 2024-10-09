import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';

import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
  back,
} from '../../Asets/icons/index';
const BackCompanents = props => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack('home')}>
        <Image
          source={back}
          style={{
            width: windowWidth * 0.1,
            height: windowWidth * 0.1,
            marginLeft: windowWidth * 0.05,
            marginTop: windowWidth * 0.03,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackCompanents;

const styles = StyleSheet.create({});
