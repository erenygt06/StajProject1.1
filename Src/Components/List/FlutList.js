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
const FlutList = props => {
  const {data} = props;
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        marginLeft: windowWidth * 0.05,
        flexDirection: 'row',
        marginTop: windowWidth * 0.05,
        height: windowWidth * 0.5,
        width: windowWidth * 0.6,
        backgroundColor: '#F6F6F6',
        borderRadius: windowWidth * 0.1,
      }}
      onPress={() => navigation.navigate('tree', item)}>
      <View
        style={{
          flexDirection: 'row',
          width: windowWidth * 0.5,
          height: windowWidth * 0.6,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: windowWidth * 0.6,
            height: windowWidth * 0.6,
            borderRadius: windowWidth * 0.05,
          }}
          source={{uri: item.image}}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} horizontal={true} />
    </View>
  );
};

export default FlutList;

const styles = StyleSheet.create({});
