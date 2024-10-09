import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  Buton_image: {
    marginTop: windowWidth * 0.02,
    height: windowWidth * 0.33,
    width: windowWidth * 0.33,
    borderRadius: windowWidth * 1,
  },
  Buton_style: {
    marginTop:windowWidth*0.032,
    marginLeft: windowWidth * 0.03,
    borderRadius: windowWidth * 0.1,
    width: windowWidth * 0.45,
    height: windowWidth * 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  FoodNameStyle: {
    fontWeight: '500',
    marginTop: windowWidth * 0.05,
  },
});
