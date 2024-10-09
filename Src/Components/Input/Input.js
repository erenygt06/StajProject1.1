import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

const Input = ({placeholder, value,onType}) => {
  return (
    <View
      style={{
        backgroundColor: '#e0e0e0',
        margin: windowWidth * 0.01,
        width: windowWidth * 0.98,
        height: windowWidth * 0.15,
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 2,
      }}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        style={{fontSize: windowWidth * 0.05}}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
