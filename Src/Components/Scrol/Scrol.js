import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Scrol = props => {
  const {data} = props;
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        marginLeft: windowWidth * 0.05,
        flexDirection: 'row',
        marginTop: windowWidth * 0.05,
        width: windowWidth * 0.9,
        height: windowWidth * 0.3,
        backgroundColor: '#F6F6F6',

        borderRadius: windowWidth * 0.05,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: windowWidth * 0.6,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: windowWidth * 0.3,
            height: windowWidth * 0.3,
            borderRadius: windowWidth * 0.05,
          }}
          source={{uri: item.image}}
        />
        <Text style={{marginLeft: windowWidth * 0.03}}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default Scrol;

const styles = StyleSheet.create({});
