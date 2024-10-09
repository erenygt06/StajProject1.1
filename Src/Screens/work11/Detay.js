import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch/useFetch';

const windowWidth = Dimensions.get('window').width;
const Detay = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(
    'https://fakestoreapi.com/products' + '/' + id,
  );
  console.log(id);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: windowWidth * 0.05,
            }}>
            <Image
              source={{uri: data.image}}
              style={{
                width: windowWidth * 0.5,
                height: windowWidth * 0.5,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
          <Text
            style={{
              margin: windowWidth * 0.02,
              fontSize: windowWidth * 0.07,
              fontWeight: '800',
            }}>
            {data.title}
          </Text>
          <Text
            style={{
              margin: windowWidth * 0.02,
              fontSize: windowWidth * 0.04,
              fontWeight: '500',
            }}>
            {data.description}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: windowWidth * 0.2,
          }}>
          <Text style={{fontSize: windowWidth * 0.1, fontWeight: '600'}}>
            {data.price}
          </Text>
          <TouchableOpacity
            style={{
              width: windowWidth * 0.3,
              height: windowWidth * 0.1,
              backgroundColor: '#64b5f6',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '800',
                fontSize: windowWidth * 0.045,
              }}>
              Sepete Ekle
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detay;

const styles = StyleSheet.create({});
