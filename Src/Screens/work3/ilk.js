import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Modal,
  visible,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModalCompanent from '../../Components/work3companent/ModalCompanent';
import React, {useState} from 'react';
import ButtonComponents from '../../Components/work3companent/ButtonComponents';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AltButton from '../../Components/work3companent/AltButton';
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
} from '../../Asets/icons/index';
import {man, adam, adam1} from '../../Asets/image/index';
import PropTypes from 'prop-types'; // ES6
import styles1 from './styles1';
import ButtonStayles from '../../Components/work3companent/ButtonStayles';
const ilk = props => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text style={styles1.SettingStayle}>Profil</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image source={adam} style={styles1.Kayarimagee} />
            <View
              style={{
                marginTop: windowWidth * 0.04,
                marginLeft: windowWidth * 0.02,
              }}>
              <Text>Yazılım Mühendisi</Text>
              <Text style={styles1.textEren}>MR Eren Yiğit</Text>
            </View>
          </View>
          <Image source={zoom} style={ButtonStayles.ustsolimage1} />
        </View>

        <View>
          <ButtonComponents
            name="Kişisel Profil"
            image1={yaldiz}
            image2={remove}
            ButtonFunc={() => {
              navigation.navigate('two');
            }}>
            <View style={styles1.childrenSelam}>
              <Text>Selam</Text>
            </View>
          </ButtonComponents>
          <ButtonComponents
            name="Şifre işlemleri "
            image1={zoom}
            image2={remove}>
            <View style={styles1.childrenSelam}>
              <Text style={{}}>Selam</Text>
            </View>
          </ButtonComponents>
          <ButtonComponents name="Yapılan İşler" image1={yaldiz} image2={remove}>
            <View style={styles1.childrenSelam}>
              <Text>Selam</Text>
            </View>
          </ButtonComponents>
          <ButtonComponents name="Ödeme Bilgileri" image1={symbols} image2={remove}>
            <View style={styles1.childrenSelam}>
              <Text>Selam</Text>
            </View>
          </ButtonComponents>
        </View>
        <View style={ButtonStayles.AnaSayfaAlt}>
          <View style={{alignItems: 'center', marginTop: windowWidth * 0.08}}>
            <Text>Yazılım mühendisliği 4.Sınıf öğrencisiyim Mobil alanında projeler üretiyorum </Text>
            <Text style={ButtonStayles.AnaSayfaAlt2}>Kapat</Text>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default ilk;

const styles = StyleSheet.create({});
