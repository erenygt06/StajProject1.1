import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default styles = StyleSheet.create({
  line_position: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:windowWidth*0.03,
  },
  line: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.01,
    marginHorizontal: windowWidth * 0.01,
    backgroundColor: 'gray',
  },
});
