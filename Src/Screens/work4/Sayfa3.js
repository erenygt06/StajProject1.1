import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import {
  remove,
  button,
  send_mail,
  symbols,
  yaldiz,
  zoom,
} from '../../Asets/icons/index';
import Sayfa3Style from './Sayfa3Style';
import ListCompanent from '../../Components/work3companent/ListCompanent';
import {food} from '../../Asets/image';
import BackCompanents from '../../Components/work3companent/BackCompanents';
const DATA = [
  {
    id: '1',
    title: 'Pizza',
    price: '30.40',
    image:
      'https://cdn.yemek.com/mnresize/1250/833/uploads/2017/11/karisik-pizza-yeni.jpg',
  },
  {
    id: '2',
    title: 'Hamburger',
    price: '30.40',
    image:
      'https://cdn.yemek.com/mncrop/940/625/uploads/2022/05/hamburger-yemekcom.jpg',
  },
  {
    id: '3',
    title: 'Döner',
    price: '30.40',
    image: 'https://www.ustadonerci.com/media/products/durum-et-doner_b.png',
  },
  {
    id: '4',
    title: 'İskender',
    price: '30.40',
    image:
      'https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg',
  },
  {
    id: '5',
    title: 'Lahmacun',
    price: '30.40',
    image:
      'https://recipesblob.droetker.com.tr/assets/34830b44669145c5a77e7db5a611b391/750x910/lahmacunla.jpg',
  },
  {
    id: '6',
    title: 'Kavurma',
    price: '30.40',
    image: 'https://i.nefisyemektarifleri.com/2022/10/04/sade-et-kavurma-2.jpg',
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const sayfa3 = props => {
  const {navigation} = props;
  return (
    <View>
      <BackCompanents />
      <View style={{}}>
        <Image
          source={food}
          style={{width: windowWidth * 1, height: windowWidth * 0.5}}
        />
      </View>
      <View style={Sayfa3Style.YaldizView}>
        <Text style={Sayfa3Style.YaldizText}>Jollof Rica</Text>
        <Image source={yaldiz} style={Sayfa3Style.Sayfa3Yaldiz} />
        <Image source={yaldiz} style={Sayfa3Style.Sayfa3Yaldiz} />
        <Image source={yaldiz} style={Sayfa3Style.Sayfa3Yaldiz} />
        <Image source={yaldiz} style={Sayfa3Style.Sayfa3Yaldiz} />
        <Image source={yaldiz} style={Sayfa3Style.Sayfa3YaldizSon} />
        <Text style={{marginLeft: windowWidth * 0.03}}>59 ralling</Text>
      </View>
      <View style={Sayfa3Style.N1200View}>
        <Text style={Sayfa3Style.N1200}>N1200</Text>
        <Image source={symbols} style={Sayfa3Style.Visa} />
      </View>
      <View style={Sayfa3Style.Decaripton}>
        <Text style={Sayfa3Style.DecariptonText}>Description</Text>
        <Text>
          jksdjknasdjnsajkndfjknasnjkfnjkasfnjkafnjkanjfnjk
          smnaklsfkaklfakfknsdkmfksdknsfkngnksfnkgnksdnkfgknllk samsflm.
        </Text>
      </View>
      <ScrollView style={Sayfa3Style.ScrolVievv}>
        <View>
          <FlatList
            horizontal={true}
            data={DATA}
            numColumns={1}
            renderItem={({item}) => (
              <ListCompanent
                name1={item.title}
                fiyat={item.price}
                image1={item.image}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      <View style={Sayfa3Style.ScrolViewAna}>
        <Text style={Sayfa3Style.N2000}>Total: N2,000</Text>
        <View style={Sayfa3Style.AddCard}>
          <Image source={yaldiz} style={Sayfa3Style.AddCardYaldiz} />
          <Text style={Sayfa3Style.AddCardText}>Add to Card</Text>
        </View>
      </View>
    </View>
  );
};

export default sayfa3;

const styles = StyleSheet.create({});
