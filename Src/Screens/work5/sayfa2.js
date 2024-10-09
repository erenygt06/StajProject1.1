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
  ScrollView,
  FlatList,
  Button,
  Alert,
  Pressable,
} from 'react-native';
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
  camera,
  user,
  cart,
  catogories,
  home,
  back,
} from '../../Asets/icons/index';
import React, {useState} from 'react';
import sayfa2Style from './sayfa2Style';
import {
  man,
  adam,
  adam1,
  food,
  kndr,
  kalp,
  kalp2,
} from '../../Asets/image/index';
import RemoveButton from '../../Components/work5Companents/RemoveButton';
import Number from '../../Components/work5Companents/Number';
import navigation from '../../Routes/work4Navigation';
import Lineee from '../../Components/work5Companents/Lineee';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const sayfa2 = props => {
  const {navigation, route} = props;
  const {image, title, description} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [heartColor, setHeartColor] = useState('white');
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
    setHeartColor(isPressed ? 'white' : 'red');
  };
  const increment = () => {
    setCount;
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const cost = count * 100;

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <SafeAreaView>
        <View style={sayfa2Style.UstView}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={back} style={sayfa2Style.backView} />
          </TouchableOpacity>
          <Text style={sayfa2Style.ProductText}>Produck Details</Text>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image source={zoom} style={sayfa2Style.Zoomimage} />
              <Image source={cart} style={sayfa2Style.Cartimage} />
            </View>
          </View>
        </View>
        <View>
          <View style={sayfa2Style.DataViev}>
            <Image source={{uri: image}} style={sayfa2Style.Dataimage} />
          </View>
        </View>
        <View style={sayfa2Style.DuzenView}>
          <Lineee />
        </View>
        <View style={sayfa2Style.NikeViev}>
          <View style={{flexDirection: 'row'}}>
            <Text style={sayfa2Style.NikeText}>Nıke Store</Text>
            <Text style={sayfa2Style.Onsale}>On Sale</Text>
          </View>
          <TouchableOpacity onPress={handlePress}>
            <Image
              style={[styles.kalp, {tintColor: heartColor}]}
              source={isPressed ? kalp2 : kalp}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: windowWidth * 0.05}}>
          <Text style={sayfa2Style.DataTitle}>{title}</Text>
        </View>
        <View style={sayfa2Style.AedView}>
          <Text style={sayfa2Style.AedText}>AED 2400</Text>
          <Text style={sayfa2Style.WasAedText}>WAS AED 2760</Text>
        </View>
        <View style={{marginLeft: windowWidth * 0.05}}>
          <Text style={{color: '#808080'}}>{description}</Text>
        </View>
        <View style={sayfa2Style.AltEuView}>
          <Text style={{color: 'white'}}>Size</Text>
          <View style={{marginLeft: windowWidth * 0.08}}>
            <Text style={{color: 'white'}}>US</Text>
            <Image source={remove} style={sayfa2Style.Removeimage} />
          </View>
          <Text style={sayfa2Style.EuText}>EU</Text>
          <Text style={sayfa2Style.EuText}>UK</Text>
          <Text style={sayfa2Style.EuText}>Color</Text>
        </View>

        <View style={sayfa2Style.BedenView}>
          <View style={sayfa2Style.BedenAltView}>
            <Number name="7" renk="#808080" />
            <Number name="8" renk="#B0E0E6" />
            <Number name="9" renk="#808080" />
          </View>
          <View style={sayfa2Style.AyakRenk}>
            <Number name="" renk="blue" />
            <Number name="" renk="red" />
            <Number name="" renk="green" />
          </View>
        </View>
        <View style={sayfa2Style.AltTouchableButton}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={decrement}>
              <View style={sayfa2Style.AzaltViev}>
                <Text style={sayfa2Style.AzaltText}>-</Text>
              </View>
            </TouchableOpacity>
            <Text style={sayfa2Style.DegerText}>{count}</Text>
            <TouchableOpacity onPress={increment}>
              <View style={sayfa2Style.ArttirButton}>
                <Text style={sayfa2Style.arttirText}>+</Text>
              </View>
            </TouchableOpacity>
            <View style={{marginLeft: windowWidth * 0.18}}>
              <TouchableOpacity onPress={() => setModalVisible(prev => !prev)}>
                <View style={sayfa2Style.AddToCardView}>
                  <Text style={sayfa2Style.AddToCardText}>Add to Card</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={sayfa2Style.ModalVieew}>
                  <View>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Image source={back} style={sayfa2Style.Modalimaghe} />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={kndr} style={sayfa2Style.Modalimaghe2} />
                      <View>
                        <Text style={sayfa2Style.AyakkabiName}>
                          Güngörmüşler kundura 1.0
                        </Text>
                        <View style={sayfa2Style.AyakkabiNameView}>
                          <TouchableOpacity onPress={decrement}>
                            <View style={sayfa2Style.TouchableOpahsiteViev}>
                              <Text style={sayfa2Style.TouchableOpasiteText}>
                                -
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <Text style={sayfa2Style.UrunText}>{count}</Text>

                          <TouchableOpacity onPress={increment}>
                            <View style={sayfa2Style.UrunArttir}>
                              <Text style={sayfa2Style.UrunArttirText}>+</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <Text style={sayfa2Style.FiyatView}>Fiyat:{cost}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default sayfa2;

const styles = StyleSheet.create({
  kalp: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    tintColor: 'white',
    marginRight: windowWidth * 0.05,
  },
});
