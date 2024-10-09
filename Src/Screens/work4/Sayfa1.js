import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  Modal,
  visible,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
} from '../../Asets/icons/index';
import '../../Routes/work4Navigation';
import {man, adam, adam1, food} from '../../Asets/image/index';
import sayfa1stytle from './Sayfa1stytle';
import Sayfa1stytle from './Sayfa1stytle';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const sayfa1 = props => {
  const {navigation} = props;

  return (
    <View>
      <SafeAreaView>
        <View>
          <Image source={food} style={sayfa1stytle.ilkimage} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: windowWidth * 0.1,
          }}>
          <View>
            <Text style={sayfa1stytle.signin}>Sign In</Text>
            <View style={sayfa1stytle.line}></View>
          </View>

          <Text style={sayfa1stytle.signup}>Sign Up</Text>
        </View>
        <View style={sayfa1stytle.mailViev}>
          <Text style={{fontWeight: '600'}}>E-mail adress</Text>
          <View style={sayfa1stytle.mailTextinput}></View>
        </View>
        <View style={sayfa1stytle.mailViev}>
          <Text style={{fontWeight: '600'}}>Enter Paswword</Text>
          <View style={sayfa1stytle.mailTextinput}>
            <Image source={yaldiz} style={sayfa1stytle.enterPaswwordimage} />
          </View>
        </View>
        <View style={sayfa1stytle.forgetPaswwordView}>
          <Text style={{color: '#7b7a75'}}>Forget paswword ?</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={Sayfa1stytle.RemembermeKutu}></View>
          <Text
            style={sayfa1stytle.RemembermeText}>
            Remember me
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: windowWidth * 0.05}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('two')}
            style={sayfa1stytle.ButtonTouch}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={sayfa1stytle.OrLie}></View>
          <Text
            style={sayfa1stytle.OrText}>
            OR
          </Text>
          <View
            style={sayfa1stytle.OrLie}></View>
        </View>
        <View
          style={sayfa1stytle.SignLn}>
          <Text>Sign ln usining</Text>
        </View>
        <View
          style={sayfa1stytle.AltButonVi}>
          <Image source={yaldiz} style={sayfa1stytle.Alticon} />
          <Image source={yaldiz} style={sayfa1stytle.Alticon} />
          <Image source={yaldiz} style={sayfa1stytle.Alticon} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default sayfa1;

const styles = StyleSheet.create({});
