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
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
  back,
} from '../../Asets/icons/index';
import React from 'react';
import ListCompanent from '../../Components/work3companent/ListCompanent';
import {food} from '../../Asets/image';
import '../../Routes/work4Navigation';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackCompanents from '../../Components/work3companent/BackCompanents';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const sayfa2 = props => {
  //const {navigation} = props;
  image1 = 'remove';
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      title: 'Pizza',
      price: '30.40',
      image:
        'https://cdn.yemek.com/mnresize/1250/833/uploads/2017/11/karisik-pizza-yeni.jpg',
    },
    {
      id: '2',
      title: 'Hamburger',
      price: '30.40',
      image:
        'https://cdn.yemek.com/mncrop/940/625/uploads/2022/05/hamburger-yemekcom.jpg',
    },
    {
      id: '3',
      title: 'Döner',
      price: '30.40',
      image: 'https://www.ustadonerci.com/media/products/durum-et-doner_b.png',
    },
    {
      id: '4',
      title: 'İskender',
      price: '30.40',
      image:
        'https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg',
    },
    {
      id: '5',
      title: 'Lahmacun',
      price: '30.40',
      image:
        'https://recipesblob.droetker.com.tr/assets/34830b44669145c5a77e7db5a611b391/750x910/lahmacunla.jpg',
    },
    {
      id: '6',
      title: 'Kavurma',
      price: '30.40',
      image:
        'https://i.nefisyemektarifleri.com/2022/10/04/sade-et-kavurma-2.jpg',
    },
  ];
  return (
    <View style={{backgroundColor: 'orange'}}>
      <SafeAreaView>
        <View style={{flexDirection: 'row'}}>
          <BackCompanents />
          <View
            style={{
              marginLeft: windowWidth * 0.1,
              borderRadius: windowWidth * 0.1,
              width: windowWidth * 0.5,
              height: windowWidth * 0.13,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: windowWidth * 0.1, fontWeight: '800'}}>
              Menü
            </Text>
          </View>
        </View>

        <ScrollView style={{}}>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({item}) => <ListCompanent image1={item.image} />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default sayfa2;

const styles = StyleSheet.create({});
