import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
  camera,
  user,
  cart,
  catogories,
  home,
  back,
} from '../../Asets/icons/index';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {man, adam, adam1, food, cry} from '../../Asets/image/index';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {News} from '../../Services';
const Sayfa3 = props => {
  const {navigation, route} = props;
  const {image, description, name} = route.params;
  console.log(route.params);

  return (
    <ImageBackground source={{uri: image}} style={{flex: 1}}>
      <SafeAreaView>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: windowWidth * 0.03,
            marginTop: windowWidth * 0.03,
            width: windowWidth * 0.07,
            height: windowWidth * 0.07,
            backgroundColor: 'white',
            borderRadius: windowWidth * 0.005,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: windowWidth * 0.05,
              height: windowWidth * 0.05,
            }}
            source={back}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: windowWidth * 0.6,
            marginLeft: windowWidth * 0.05,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: windowWidth * 0.27,
              height: windowWidth * 0.1,
              backgroundColor: 'white',
              borderRadius: windowWidth * 0.02,
            }}>
            <Text style={{fontSize: windowWidth * 0.045, fontWeight: '500'}}>
              Trendy
            </Text>
          </View>
          <View
            style={{
              marginLeft: windowWidth * 0.01,
              alignItems: 'center',
              justifyContent: 'center',
              width: windowWidth * 0.27,
              height: windowWidth * 0.1,
              backgroundColor: 'white',
              borderRadius: windowWidth * 0.02,
            }}>
            <Text style={{fontSize: windowWidth * 0.045, fontWeight: '500'}}>
              Crypto
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: windowWidth * 0.02,
            marginLeft: windowWidth * 0.05,
            marginRight: windowWidth * 0.02,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: windowWidth * 0.073,
              fontWeight: '500',
            }}>
            {name}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginLeft: windowWidth * 0.05,
            marginTop: windowWidth * 0.02,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                width: windowWidth * 0.1,
                height: windowWidth * 0.1,
              }}
              source={man}
            />
            <View>
              <Text style={{color: 'white', fontWeight: '600'}}>
                EconomicTimes
              </Text>
              <Text style={{color: '#808080', fontWeight: '600'}}>
                Today,08.21 AM
              </Text>
            </View>
          </View>
          <View style={{marginRight: windowWidth * 0.05}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: windowWidth * 0.1,
                  height: windowWidth * 0.1,
                  tintColor: 'white',
                }}
                source={yaldiz}
              />
              <Image
                style={{
                  width: windowWidth * 0.1,
                  height: windowWidth * 0.1,
                  tintColor: 'white',
                }}
                source={zoom}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: windowWidth * 0.05,
            marginLeft: windowWidth * 0.05,
          }}>
          <Image
            style={{
              width: windowWidth * 0.9,
              height: windowWidth * 0.009,
              tintColor: 'white',
            }}
            source={remove}
          />
        </View>
        <View
          style={{
            marginLeft: windowWidth * 0.05,
            marginRight: windowWidth * 0.05,
            marginTop: windowWidth * 0.03,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: windowWidth * 0.04,
            }}>
            {description}
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Sayfa3;

const styles = StyleSheet.create({});
