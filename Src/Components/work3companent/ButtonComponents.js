import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  visible,
  Modal,
  Pressable,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import PropTypes from 'prop-types'; // ES6
import ilk from '../../Screens/work3/ilk';
import {man, adam, adam1} from '../../Asets/image/index';
import iki from '../../Screens/work2/iki';
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
} from '../../Asets/icons/index';
import ButtonStayles from './ButtonStayles';
import ModalCompanent from './ModalCompanent';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ButtonComponents = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const {style, image1, image2, children, ButtonFunc} = props;

  return (
    <View>
      <TouchableOpacity
        style={{marginTop: windowWidth * 0.005}}
        onPress={ButtonFunc}>
        <View style={ButtonStayles.ButtonView}>
          <View style={{flexDirection: 'row'}}>
            <Image source={image1} style={ButtonStayles.ustsolimage} />
            <Text style={ButtonStayles.textName}>{props.name}</Text>
          </View>
          <View>
            <Image source={image2} style={ButtonStayles.ustsolimage} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
ButtonComponents.prototype = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  setVisible: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
ButtonComponents.defaultProps = {
  style: {ButtonStayles},
  name: PropTypes.string,
};

export default ButtonComponents;

const style = StyleSheet.create({});
