import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import React from 'react';
import {HavaD} from '../../Services';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HavaDList} from '../../Components';
const Sayfa3 = props => {
  const navigation = useNavigation();
  const [havaD, setHavaD] = useState([]);
  const [city, setCity] = useState('');
  const country = 'tr';
  const tag = 'general';
  const [set, useSet] = useState(HavaD);
  const service = params => {
    HavaD.myGetHavaD(params)
      .then(response => {
        console.log('response', response);
        setHavaD(response.result);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  const getHavaD = () => {
    const params = `?data.lang=tr&data.city=ankara`;

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
        onSubmitEditing={getHavaD}
      />
      <HavaDList data={havaD} />
    </View>
  );
};

export default Sayfa3;

const styles = StyleSheet.create({});
