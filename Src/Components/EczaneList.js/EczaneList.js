import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const EczaneList = props => {
  const {data} = props;
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <View
      style={{
        width: windowWidth * 1,
        height: windowWidth * 0.3,

        marginTop: windowWidth * 0.05,
        borderWidth: 1,
      }}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: windowWidth * 0.05, fontWeight: '700'}}>
          {item.name} Eczanesi
        </Text>
      </View>
      <Text style={{fontSize: windowWidth * 0.05}}>İlçe:{item.dist}</Text>
      <Text style={{fontSize: windowWidth * 0.05, width: windowWidth * 1}}>
        Adres={item.address}
      </Text>
    </View>
  );
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default EczaneList;

const styles = StyleSheet.create({});
