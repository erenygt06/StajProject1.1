import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  ilkView: {
    width: windowWidth * 1,
    height: windowWidth * 0.75,
    backgroundColor: '#F99D92',
    borderBottomLeftRadius: windowWidth * 0.08,
    borderBottomRightRadius: windowWidth * 0.08,
  },
  ilkViewimage: {
    marginTop: windowWidth * 0.061,
    marginLeft: windowWidth * 0.15,
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
  },
  ikinciView: {
    flexDirection: 'row',
    marginTop: windowWidth * 0.4,
    justifyContent: 'space-between',
  },
  ViewAll: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: windowWidth * 0.2,
    height: windowWidth * 0.07,
    borderRadius: windowWidth * 0.1,
    marginRight: windowWidth * 0.05,
  },
  VievAllText: {
    color: 'white',
    marginTop: windowWidth * 0.015,
  },
  ProjectText: {
    marginLeft: windowWidth * 0.06,
    fontWeight: '700',
    fontSize: windowWidth * 0.07,
  },

  ProjectScrolBoxView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ProjectScrolBox1: {
    alignItems: 'center',
    marginTop: windowWidth * 0.05,
    marginLeft: windowWidth * 0.06,
    width: windowWidth * 0.4,
    height: windowWidth * 0.26,
    backgroundColor: '#D6E7D8',
  },
  ProjectScrolBox2: {
    alignItems: 'center',
    marginTop: windowWidth * 0.05,
    marginRight: windowWidth * 0.06,
    width: windowWidth * 0.4,
    height: windowWidth * 0.26,
    backgroundColor: '#D3D3D3',
  },
  ProjectScrolBox3: {
    alignItems: 'center',
    marginTop: windowWidth * 0.05,
    marginLeft: windowWidth * 0.06,
    width: windowWidth * 0.4,
    height: windowWidth * 0.26,
    backgroundColor: '#D3D3D3',
  },
  ProjectScrolBox4: {
    alignItems: 'center',
    marginTop: windowWidth * 0.05,
    marginRight: windowWidth * 0.06,
    width: windowWidth * 0.4,
    height: windowWidth * 0.26,
    backgroundColor: '#D6E7D8',
  },
  ProjectScrolBoximage: {
    marginTop: windowWidth * 0.03,
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
  },
  YellowBox: {
    alignItems: 'center',
    left: windowWidth * 0.2,
    borderRadius: windowWidth * 0.1,
    bottom: windowWidth * 0.14,
    position: 'relative',
    width: windowWidth * 0.6,
    height: windowWidth * 0.13,
    backgroundColor: 'yellow',
  },
  YellowBoxText: {
    marginTop: windowWidth * 0.02,
    fontSize: windowWidth * 0.07,
    color: 'white',
    fontWeight: '600',
  },
  JohenDoeView: {
    alignItems: 'center',
    borderRadius: windowWidth * 0.1,
    left: windowWidth * 0.05,
    backgroundColor: 'white',
    position: 'relative',
    width: windowWidth * 0.9,
    height: windowWidth * 0.7,
    position: 'absolute',
    top: windowWidth * 0.5,
  },
  JohenDoeTitleView: {
    alignItems: 'center',
  },
  JohenDoeText: {
    marginTop: windowWidth * 0.05,
    fontWeight: '600',
    fontSize: windowWidth * 0.08,
  },
  JohenDoeButton: {
    alignItems: 'center',
    width: windowWidth * 0.4,
    height: windowWidth * 0.1,
    backgroundColor: 'yellow',
    borderRadius: windowWidth * 0.05,
    marginTop: windowWidth * 0.04,
  },
  JohenDoeButtonText: {
    marginTop: windowWidth * 0.03,
    color: 'black',
  },
  JohenDoeButtonAltText1: {
    marginTop: windowWidth * 0.1,
    marginRight: windowWidth * 0.2,
    alignItems: 'center',
  },
  JohenDoeButtonAltText2: {
    marginTop: windowWidth * 0.1,

    alignItems: 'center',
  },
  JohenDoealtdegerText1: {
    fontSize: windowWidth * 0.05,
    fontWeight: '500',
  },
  JohenDoealtdegerTextsayi: {
    color: 'red',
    fontSize: windowWidth * 0.05,
    fontWeight: '500',
  },
  YanyanaEkleme: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
