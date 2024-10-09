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
import styles from './style2.2';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const iki = () => {
  return (
    <SafeAreaView>
      <View style={styles.JohenDoeView}></View>
      <ScrollView>
        <View style={styles.ilkView}>
          <Image
            source={require('../../Asets/image/man.png')}
            style={styles.ilkViewimage}
          />
        </View>

        <View style={styles.ikinciView}>
          <Text style={styles.ProjectText}>Projects</Text>
          <View style={styles.ViewAll}>
            <Text style={styles.VievAllText}>View all</Text>
          </View>
        </View>
        <View>
          <View style={styles.ProjectScrolBoxView}>
            <View style={styles.ProjectScrolBox1}>
              <Image
                source={require('../../Asets/image/man.png')}
                style={styles.ProjectScrolBoximage}
              />
            </View>
            <View style={styles.ProjectScrolBox2}>
              <Image
                source={require('../../Asets/image/man.png')}
                style={styles.ProjectScrolBoximage}
              />
            </View>
          </View>
          <View style={styles.ProjectScrolBoxView}>
            <View style={styles.ProjectScrolBox3}>
              <Image
                source={require('../../Asets/image/man.png')}
                style={styles.ProjectScrolBoximage}
              />
            </View>
            <View style={styles.ProjectScrolBox4}>
              <Image
                source={require('../../Asets/image/man.png')}
                style={styles.ProjectScrolBoximage}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.YellowBox}>
        <Text style={styles.YellowBoxText}>Hıra Hım</Text>
      </View>
      <View style={styles.JohenDoeView}>
        <View style={styles.JohenDoeTitleView}>
          <Text style={styles.JohenDoeText}>Joe Doe</Text>
        </View>
        <Text>sjdajhksdjkasbjk dasjkndbjakbjksd </Text>
        <Text>asjkdhjksadjsahjkdjhksa</Text>
        <View style={styles.JohenDoeButton}>
          <Text style={styles.JohenDoeButtonText}>Follow</Text>
        </View>
        <View style={styles.YanyanaEkleme}>
          <View style={styles.JohenDoeButtonAltText1}>
            <Text style={styles.JohenDoealtdegerText1}>Followers</Text>
            <Text style={styles.JohenDoealtdegerTextsayi}>2500</Text>
          </View>
          <View style={styles.JohenDoeButtonAltText2}>
            <Text style={styles.JohenDoealtdegerText1}>Followers</Text>
            <Text style={styles.JohenDoealtdegerTextsayi}>2500</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default iki;

//const styles = StyleSheet.create({});
