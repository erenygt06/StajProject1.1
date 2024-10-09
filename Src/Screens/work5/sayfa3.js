import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';
import FlutListt from '../../Components/work5Companents/FlutListt';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
  back,
} from '../../Asets/icons/index';
import {SafeAreaView} from 'react-native-safe-area-context';
const app1 = props => {
  const {navigation} = props;
  return (
    <SafeAreaView  style={{backgroundColor: 'black', flex: 1}}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={back}
            style={{
              marginRight: windowWidth * 0.03,
              width: windowWidth * 0.08,
              height: windowWidth * 0.08,
              tintColor: 'white',
            }}
          />
        </TouchableOpacity>
        <FlutListt />
      </View>
    </SafeAreaView>
  );
};

export default app1;
