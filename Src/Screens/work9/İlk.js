import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import UserCardd from './UserCardd';

const İlk = () => {
  const [userList, setuserList] = useState([]);
  async function fetchData() {
    const responce = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    setuserList(responce.data);
  }
  const renderUser = ({item}) => <UserCardd name={item.name} />;
  return (
    <SafeAreaView>
      <View>
        <FlatList data={userList} renderItem={renderUser} />
        <Text>eren</Text>
        <Button title="Data" onPress={fetchData} />
      </View>
    </SafeAreaView>
  );
};

export default İlk;

const styles = StyleSheet.create({});
