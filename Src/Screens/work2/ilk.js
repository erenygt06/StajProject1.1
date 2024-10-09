import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles2';
import {remove,button,send_mail,symbols,yaldiz,zoom} from '../../Asets/icons/index';
import {man,adam,adam1} from '../../Asets/image/index';
import {Tex} from '../../Components/index';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ilk = () => {
  return (
    <SafeAreaView>
      <View style={styles.AramaButonKapsayan}>
        <View style={styles.AramaButton}>
          <Text style={styles.AramaText}>UI/UX Designer</Text>
          <Image
            source={zoom}
            style={styles.Aramaimage}
          />
        </View>
      </View>
      <View>
        <ScrollView style={styles.EnTepeScrool}>
          <View>
            <ScrollView style={styles.KayarProfil} horizontal="true">
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={adam}
                    style={styles.Kayarimage}
                  />
                  <Text style={styles.KayarText}>Eren</Text>
                </View>
                <View style={styles.KayarViewBosluk}>
                  <Image
                    source={adam}
                    style={styles.Kayarimage}
                  />
                  <Text style={styles.KayarText}>Eren</Text>
                </View>
                <View style={styles.KayarViewBosluk}>
                  <Image
                    source={adam}
                    style={styles.Kayarimage}
                  />
                  <Text style={styles.KayarText}>Eren</Text>
                </View>
                <View style={styles.KayarViewBosluk}>
                  <Image
                    source={adam}
                    style={styles.Kayarimage}
                  />
                  <Text style={styles.KayarText}>Eren</Text>
                </View>
                <View style={styles.KayarViewBosluk}>
                  <Image
                    source={adam}
                    style={styles.Kayarimage}
                  />
                  <Text style={styles.KayarText}>Eren</Text>
                </View>
                <View style={styles.KayarViewBosluk}>
                  <Image
                    source={adam}
                    style={styles.Kayarimage}
                  />
                  <Text style={styles.KayarText}>Eren</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.ProfilCardView}>
            <View style={styles.ProfilCard1}>
              <Image
                source={man}
                style={styles.ProfilCardimage}
              />
              <View>
                <Text style={styles.ProfilCardTextTitle}>Eren Yiğit</Text>
                <Text style={styles.ProfilCardText}>UI/UX Designer</Text>
                <Text style={styles.ProfilCardText}>4.5 years</Text>
              </View>
            </View>
            <View style={styles.ProfilCard2}>
              <Image
                source={man}
                style={styles.ProfilCardimage}
              />
              <View>
                <Text style={styles.ProfilCardTextTitle}>Eren Yiğit</Text>
                <Text style={styles.ProfilCardText}>UI/UX Designer</Text>
                <Text style={styles.ProfilCardText}>4.5 years</Text>
              </View>
            </View>

            <View style={styles.ProfilCard3}>
              <Image
                source={man}
                style={styles.ProfilCardimage}
              />
              <View>
                <Text style={styles.ProfilCardTextTitle}>Eren Yiğit</Text>
                <Text style={styles.ProfilCardText}>UI/UX Designer</Text>
                <Text style={styles.ProfilCardText}>4.5 years</Text>
              </View>
            </View>
            <Tex />
          </View>
        </ScrollView>
        <View style={styles.BottumMenuView}>
          <Image
            source={button}
            style={styles.BottumMenuicons1}
          />
          <Image
            source={button}
            style={styles.BottumMenuicons2_4}
          />
          <Image
            source={button}
            style={styles.BottumMenuicons3}
          />
          <Image
            source={button}
            style={styles.BottumMenuicons2_4}
          />
          <Image
            source={button}
            style={styles.BottumMenuicons5}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ilk;

//const styles = StyleSheet.create({});
