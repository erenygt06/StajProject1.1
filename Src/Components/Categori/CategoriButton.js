import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CategoriButton = props => {
  const {name} = props;
  return (
    <View>
      <TouchableOpacity
        style={{
          marginTop: windowWidth * 0.05,
          marginLeft: windowWidth * 0.05,
          width: windowWidth * 0.25,
          height: windowWidth * 0.1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: windowWidth * 0.05,
            fontWeight: '600',
          }}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriButton;

const styles = StyleSheet.create({});
