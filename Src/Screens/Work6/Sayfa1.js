import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Head,
  FlutList,
  CategoriButton,
  Scrol,
  AltButton,
  AltButtonnnn,
} from '../../Components';
import {News} from '../../Services';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Sayfa1 = props => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  const country = 'tr';
  const tag = 'general';
  const params = `?country=${country}&tag=${tag}`;
  const [set, useSet] = useState(News);
  const service = () => {
    News.myGetNews(params)
      .then(response => {
        console.log('response', response);
        setNews(response.result);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  useEffect(() => {
    service();
  }, []);

  return (
    <SafeAreaView>
      <Head />
      <View>
        <Text
          style={{
            fontSize: windowWidth * 0.085,
            fontWeight: '600',
            marginLeft: windowWidth * 0.03,
          }}>
          Good Morning
        </Text>
        <Text
          style={{
            marginLeft: windowWidth * 0.03,
            fontSize: windowWidth * 0.045,
          }}>
          Explore the world by one Click
        </Text>
      </View>
      <View
        style={{
          width: windowWidth * 1,
          height: windowWidth * 0.55,
          justifyContent: 'center',
        }}>
        <FlutList data={news} navigation={navigation} />
      </View>
      <ScrollView horizontal={true}>
        <CategoriButton name="Covid-19" />
        <CategoriButton name="Crypto" />
        <CategoriButton name="Sports" />
        <CategoriButton name="Tech" />
        <CategoriButton name="War" />
      </ScrollView>
      <ScrollView style={{width: windowWidth * 1, height: windowWidth * 0.6}}>
        <Scrol data={news} />
      </ScrollView>
      <View>
        <AltButtonnnn />
      </View>
    </SafeAreaView>
  );
};

export default Sayfa1;

const styles = StyleSheet.create({});
