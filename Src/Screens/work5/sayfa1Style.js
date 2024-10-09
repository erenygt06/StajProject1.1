import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  AnaView: {backgroundColor: 'black', flex: 1},
  UstSercViev: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SerchViev: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    alignItems: 'center',
    marginTop: windowWidth * 0.02,
  },
  TheText: {color: 'white', fontSize: windowWidth * 0.03},
  SercicView: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.1,
    flexDirection: 'row',
    marginTop: windowWidth * 0.02,
    borderWidth: windowWidth * 0.006,
    borderRadius: windowWidth * 0.05,
    borderColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Sercicimage: {
    marginRight: windowWidth * 0.02,
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    tintColor: 'white',
  },
  WhatAreText: {color: '#808080', marginRight: windowWidth * 0.05},
  Cameraimage: {
    marginRight: windowWidth * 0.02,
    marginTop: windowWidth * 0.03,
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    tintColor: 'white',
  },
  RemoveButtonSt: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  NewArriasView: {flexDirection: 'row', justifyContent: 'space-between'},
  AltFlutListView: {
    marginRight: windowWidth * 0.07,
    marginLeft: windowWidth * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  AltButtonimage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowWidth * 0.05,
  },
  homeimage: {
    tintColor: 'white',
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    marginLeft: windowWidth * 0.05,
  },
  Categoriimage: {
    tintColor: '#808080',
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  CArtimage: {
    tintColor: '#808080',
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  USerimage: {
    tintColor: '#808080',
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    marginRight: windowWidth * 0.05,
  },
});
