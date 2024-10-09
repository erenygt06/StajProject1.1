import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const Sayfa2 = props => {
  const list = useSelector(s => s.nameList);
  const {navigation} = props;
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </SafeAreaView>
  );
};

export default Sayfa2;

const styles = StyleSheet.create({});
