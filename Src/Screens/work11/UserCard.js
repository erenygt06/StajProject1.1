import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

const UserCard = ({product,onSelect}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={onSelect}>
        <View
          style={{
            borderWidth: 1,
            flexDirection: 'row',
            margin: windowWidth * 0.02,
            borderRadius: 20,
            backgroundColor: '#e9e9e9',
          }}>
          <Image
            source={{uri: product.image}}
            style={{
              width: windowWidth * 0.3,
              height: windowWidth * 0.3,
              borderRadius: 20,
            }}
          />
          <View style={{width: windowWidth * 0.7}}>
            <Text
              style={{
                fontWeight: '800',
                marginLeft: windowWidth * 0.05,
                marginRight:windowWidth*0.05,
                fontSize: windowWidth * 0.04,
              }}>
              {product.title}
            </Text>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: windowWidth * 0.03,
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.05,
                  color: 'green',
                  fontWeight: '700',
                  fontSize: windowWidth * 0.1,
                }}>
                ${product.price}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({});

//{"id":1,"title":"Fjallraven - Foldsack No. 1 Sırt Çantası, 15 Dizüstü Bilgisayara Uygun",
//"price":109.95,"description":"Günlük kullanım ve ormanda yürüyüşler için mükemmel sırt çantanız. Dizüstü bilgisayarınızı (15 inçe kadar) yastıklı kılıfın içine koyun, günlük","category":"erkek giyim","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},
