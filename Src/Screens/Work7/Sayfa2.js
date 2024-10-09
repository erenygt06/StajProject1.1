import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Eczane} from '../../Services';
import {
  Head,
  FlutList,
  CategoriButton,
  Scrol,
  AltButton,
  AltButtonnnn,
  EczaneList,
  Hava
} from '../../Components';
const Sayfa2 = props => {
  const navigation = useNavigation();
  const [eczane, setEczane] = useState([]);
  const [city, setCity] = useState('');
  const country = 'tr';
  const tag = 'general';

  const [set, useSet] = useState(Eczane);
  const service = params => {
    Eczane.myGetEczane(params)
      .then(response => {
        console.log('response', response);
        setEczane(response.result);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const getEczane = () => {
    const params = `?il=${city}`;
    service(params);
  };

  return (
    <View>
      <TextInput
        style={{
          height: windowWidth * 0.3,
          height: windowWidth * 0.1,
          borderWidth: 1,
        }}
        value={city}
        onChangeText={value => setCity(value)}
        onSubmitEditing={getEczane}
      />
      <View>
        <EczaneList data={eczane}/>
      </View>
    </View>
  );
};

export default Sayfa2;

const styles = StyleSheet.create({});
