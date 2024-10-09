import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  ilkimage: {
    right: windowWidth * 0.15,
    width: windowWidth * 0.5,
    height: windowWidth * 0.4,
    borderRadius: windowWidth * 1,
  },
  signin: {
    marginLeft: windowWidth * 0.18,
    fontSize: windowWidth * 0.07,
    fontWeight: '800',
    color: '#ff9b00',
  },
  line: {
    marginLeft: windowWidth * 0.06,
    marginTop: windowWidth * 0.02,
    width: windowWidth * 0.5,
    height: windowWidth * 0.01,
    backgroundColor: '#ff9b00',
    borderRadius: windowWidth * 0.1,
  },
  signup: {
    marginLeft: windowWidth * 0.08,
    fontSize: windowWidth * 0.07,
    fontWeight: '800',
    color: '#ffd232',
  },
  mailViev: {
    marginTop: windowWidth * 0.05,
    marginLeft: windowWidth * 0.07,
  },
  mailTextinput: {
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: windowWidth * 0.03,
    width: windowWidth * 0.85,
    height: windowWidth * 0.1,
    backgroundColor: 'white',
    marginTop: windowWidth * 0.015,
  },
  enterPaswwordimage: {
    height: windowWidth * 0.08,
    width: windowWidth * 0.08,
    marginTop: windowWidth * 0.01,
    marginLeft: windowWidth * 0.73,
    tintColor: '#7b7a75',
  },
  forgetPaswwordView: {
    marginTop: windowWidth * 0.02,
    marginLeft: windowWidth * 0.6,
  },
  Alticon: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  RemembermeKutu: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    backgroundColor: 'white',
    marginLeft: windowWidth * 0.08,
    borderWidth: windowWidth * 0.005,
  },
  RemembermeText: {
    marginTop: windowWidth * 0.01,
    marginLeft: windowWidth * 0.01,
    fontWeight: '700',
  },
  ButtonTouch: {
    borderRadius: windowWidth * 0.1,
    width: windowWidth * 0.6,
    height: windowWidth * 0.12,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  OrLie: {
    marginLeft: windowWidth * 0.13,
    marginTop: windowWidth * 0.05,
    width: windowWidth * 0.3,
    height: windowWidth * 0.01,
    backgroundColor: 'black',
  },
  OrText: {
    marginTop: windowWidth * 0.033,
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    marginLeft: windowWidth * 0.05,
  },
  SignLn:{
    
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: windowWidth * 0.05,
    
  },
  AltButonVi:{
    
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: windowWidth * 0.05,
    
  },
});
