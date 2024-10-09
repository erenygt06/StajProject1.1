import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

const Button = ({text, loading, onPress}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#64b5f6',
          width: windowWidth * 0.3,
          height: windowWidth * 0.15,
          borderRadius: 20,
        }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text
            style={{
              fontSize: windowWidth * 0.06,
              color: 'white',
              fontWeight: '600',
            }}>
            {text}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
