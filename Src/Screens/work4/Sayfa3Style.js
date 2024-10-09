import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  Sayfa3Yaldiz: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    tintColor: 'yellow',
  },
  Sayfa3YaldizSon: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    tintColor: 'black',
  },
  N1200: {
    fontWeight: '600',
    fontSize: windowWidth * 0.05,
    marginLeft: windowWidth * 0.05,
  },
  Visa: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    tintColor: 'black',
    marginRight: windowWidth * 0.05,
  },
  Decaripton: {
    marginLeft: windowWidth * 0.05,
    marginRight: windowWidth * 0.05,
  },
  ScrolViewAna: {
    marginTop: windowWidth * 0.02,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: windowWidth * 1,
    backgroundColor: 'white',
    height: windowWidth * 0.3,
    borderRadius: windowWidth * 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  N2000: {
    marginTop: windowWidth * 0.07,
    fontSize: windowWidth * 0.05,
    fontWeight: '700',
    marginLeft: windowWidth * 0.05,
  },
  AddCard: {
    marginTop: windowWidth * 0.05,
    width: windowWidth * 0.4,
    height: windowWidth * 0.1,
    backgroundColor: 'orange',
    borderRadius: windowWidth * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: windowWidth * 0.03,
  },
  AddCardYaldiz: {
    marginLeft: windowWidth * 0.05,
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    tintColor: 'yellow',
  },
  AddCardText: {
    color: 'white',
    fontWeight: '800',
    marginRight: windowWidth * 0.05,
  },
  DecariptonText: {marginTop: windowWidth * 0.03, fontWeight: '800'},
  ScrolVievv:{flexDirection: 'row', marginTop: windowWidth * 0.04},
  N1200View:{flexDirection: 'row', justifyContent: 'space-between'},
  YaldizView:{flexDirection: 'row', marginLeft: windowWidth * 0.05},
  YaldizText:{fontWeight: '600', fontSize: windowWidth * 0.05},
});
