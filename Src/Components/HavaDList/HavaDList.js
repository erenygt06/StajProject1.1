import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HavaDList = props => {
  const {data} = props;
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View
      style={{
        width: windowWidth * 1,
        height: windowWidth * 0.3,
        marginTop: windowWidth * 0.05,
        borderWidth: 1,
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: windowWidth * 0.3,
          height: windowWidth * 0.3,
          borderRadius: windowWidth * 0.05,
        }}
        source={{uri: item.icon}}
      />
      <View style={{alignItems: 'center', marginLeft: windowWidth * 0.02}}>
        <Text style={{fontSize: windowWidth * 0.07, fontWeight: '700'}}>
          {item.day}
        </Text>
        <Text style={{fontSize: windowWidth * 0.05, fontWeight: '700'}}>
          {item.date}
        </Text>
        <Text style={{fontSize: windowWidth * 0.05, fontWeight: '700'}}>
          Derece:{item.degree}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: windowWidth * 0.05, fontWeight: '700'}}>
            Derece:{item.min}
          </Text>
          <Text style={{fontSize: windowWidth * 0.05, fontWeight: '700'}}>
            Derece:{item.max}
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default HavaDList;

const styles = StyleSheet.create({});
