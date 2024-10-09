import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Head,
  FlutList,
  CategoriButton,
  Scrol,
  AltButton,
  AltButtonnnn,
  Sayfa2Flutlist,
} from '../../Components';

import {News} from '../../Services';
import {useEffect, useState} from 'react';
import Flutlist2 from '../../Components/work5Companents/Flutlist2';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Sayfa2 = props => {
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
    <View>
      <SafeAreaView>
        <View>
          <Text
            style={{
              marginTop: windowWidth * 0.03,
              fontSize: windowWidth * 0.08,
              fontWeight: '600',
              marginLeft: windowWidth * 0.03,
            }}>
            Walk With Trend
          </Text>
          <Text
            style={{
              fontSize: windowWidth * 0.05,
              fontWeight: '300',
              marginLeft: windowWidth * 0.03,
            }}>
            Don't Stay behind, read the trend
          </Text>
        </View>
        <View >
          <Sayfa2Flutlist data={news}/>
        </View>
        <View>
          <Text
            style={{
              marginTop: windowWidth * 0.05,
              marginLeft: windowWidth * 0.05,
              fontSize: windowWidth * 0.07,
              fontWeight: '500',
            }}>
            Top Reads of the day
          </Text>
        </View>
        <ScrollView style={{width: windowWidth * 1, height: windowWidth * 0.8}}>
          <Scrol data={news} />
        </ScrollView>
        <View>
          <AltButtonnnn />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Sayfa2;

const styles = StyleSheet.create({});
