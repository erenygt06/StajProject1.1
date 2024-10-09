import {StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Sayfa1 = () => {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{marginTop: windowWidth * 0.1, marginLeft: windowWidth * 0.1}}>
          eren
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Sayfa1;

const styles = StyleSheet.create({});
