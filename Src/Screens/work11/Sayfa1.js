import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import UserCard from './UserCard';
import navigation from '../../Routes/Work11Navigation';
import useFetch from '../../hooks/useFetch/useFetch';

const windowWidth = Dimensions.get('window').width;
const Sayfa1 = props => {
  
  const {loading,error,data}=useFetch('https://fakestoreapi.com/products')
  
  const handleProductSelect = id => {
    navigation.navigate('two', {id});
  };
  const renderProduct = ({item}) => (
    <UserCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );
  const navigation = useNavigation();
  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if(error){
    return<Text>{error}</Text>
  }

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={{
            borderRadius: 10,
            backgroundColor: '#e9e9e9',
            borderWidth: 1,
            marginLeft: windowWidth * 0.025,
            width: windowWidth * 0.95,
            height: windowWidth * 0.12,
          }}
        />
        <FlatList data={data} renderItem={renderProduct} />
      </View>
    </SafeAreaView>
  );
};

export default Sayfa1;

const styles = StyleSheet.create({});
