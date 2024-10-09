import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  SettingStayle: {
    fontWeight: '600',
    fontSize: windowWidth * 0.08,
    marginLeft: windowWidth * 0.03,
    marginTop: windowWidth * 0.03,
    color: 'blue',
  },
  Kayarimagee: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    marginLeft: windowWidth * 0.03,
    marginTop: windowWidth * 0.02,
  },
  ustsolimage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    marginLeft: windowWidth * 0.03,
    marginTop: windowWidth * 0.03,
  },
  textEren:{
    fontWeight: '600',
  },
  childrenSelam:{
    marginTop: windowWidth * 0.01,
    width: windowWidth * 0.3,
    height: windowWidth * 0.1,
    backgroundColor: '#dddd',
    borderRadius: windowWidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
