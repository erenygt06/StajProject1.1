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
  import {news} from '../../Services';
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const ApiFlat = props => {
    const {data} = props;
    const navigation = useNavigation();
    const renderItem = ({item}) => (
      <View style={{marginLeft: windowWidth * 0.05}}>
        <TouchableOpacity
          style={{
            marginTop: windowWidth * 0.05,
            width: windowWidth * 0.9,
            height: windowWidth * 0.5,
            backgroundColor: '#808080',
            alignItems: 'center',
            borderRadius: windowWidth * 0.05,
          }}>
          <Image
            style={{
              width: windowWidth * 0.3,
              height: windowWidth * 0.3,
              borderRadius: windowWidth * 0.05,
            }}
            source={{uri: item.image}}
          />
          <Text>{item.name}</Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: windowWidth * 0.9,
            height: windowWidth * 0.5,
            marginTop: windowWidth * 0.03,
          }}>
          <View>
            <Text style={{fontSize: windowWidth * 0.03, fontWeight: '600'}}>
              {data.name}
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
  
  export default ApiFlat;
  
  const styles = StyleSheet.create({});
  