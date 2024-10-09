import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  resim: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: windowWidth * 0.08,
  },
  icView: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowWidth * 0.06,
  },
  ustView: {
    marginLeft: windowWidth * 0.05,
  },
});