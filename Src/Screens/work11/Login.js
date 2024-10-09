import React, {useEffect} from 'react';
import {View, Image, Dimensions, Alert, Text} from 'react-native';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import {adam} from '../../Asets/image';
import {Formik} from 'formik';
import useFetchch from '../../hooks/useFetchch/useFetchch';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;

const Login = ({navigation}) => {
  const {data, post, loading, error} = useFetchch();

  const handleLogin = async values => {
    console.log('Login form submitted:', values); // Form verilerini kontrol et
    await post('https://fakestoreapi.com/auth/login', values); // Doğru endpoint'i kullan
  };

  // `data` değiştiğinde kontrol etme
  
  useEffect(() => {
    if (data) {
      console.log('Gelen Data:', data); // Eğer data state'i doluysa veriyi yazdır

      // Gelen veri başarılı bir giriş yanıtı içeriyorsa yönlendirme yap
      if (data.token) { 
        //AsyncStorage.setItem('@user',JSON.stringify(user)); // API'den bir token veya başarı yanıtı geliyorsa
        navigation.navigate('home');
      } else {
        Alert.alert('Dükkan', 'Giriş başarısız. Kullanıcı adı veya şifre hatalı.');
      }
    }
  }, [data, navigation]);

  if (error) {
    Alert.alert('Dükkan', error); // Error state'ten hata mesajını göster
    console.log('Hata:', error); // Hata logunu kontrol et
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={adam}
        style={{
          width: windowWidth * 0.3,
          height: windowWidth * 0.3,
          margin: windowWidth * 0.05,
        }}
      />
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Input
              placeholder="Kullanıcı Adını Giriniz..."
              value={values.username}
              onType={handleChange('username')}
            />
            <Input
              placeholder="Şifrenizi Giriniz..."
              value={values.password}
              onType={handleChange('password')}
            />
            <Button text={'Giriş Yap'} onPress={handleSubmit} />

            {/* Eğer loading durumu varsa yükleme mesajı */}
            {loading && <Text>Giriş Yapılıyor...</Text>}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const user={
  "adres": {
    "coğrafi konum": {
      "enlem": "-37.3159",
      "uzun": "81.1496"
    },
    "şehir": "kilcoole",
    "sokak": "yeni yol",
    "sayı": 7682,
    "posta kodu": "12926-3874"
  },
  "kimlik": 1,
  "e-posta": "john@gmail.com",
  "kullanıcı adı": "johnd",
  "şifre": "m38rmF$",
  "isim": {
    "isim": "john",
    "soyadı": "doe"
  },
  "telefon": "1-570-236-7033",
  "__v": 0
};