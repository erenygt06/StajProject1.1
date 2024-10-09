import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
const Sayfa1 = props => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch({type:'ADD_NAME',payload:{name:text}})
  };
  const {navigation} = props;
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('two')}>
        <Text>Sayfa2ye git</Text>
      </TouchableOpacity>
      <View>
        <Button title="ekle" onPress={handleAdd} />
      </View>
      <View style={{borderWidth: 1}}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="isim giriniz"
        />
      </View>
    </SafeAreaView>
  );
};

export default Sayfa1;

const styles = StyleSheet.create({});
