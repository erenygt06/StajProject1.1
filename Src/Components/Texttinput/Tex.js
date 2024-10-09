import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import {man, adam, adam1} from '../../Asets/image/index';
import PropTypes from 'prop-types';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tex = props => {
  const {text} = props;
  return (
    <View>
      <View style={styles.ProfilCard1}>
        <Image source={man} style={styles.ProfilCardimage} />
        <View>
          <Text style={styles.ProfilCardTextTitle}>Eren Yiğit</Text>
          <Text style={styles.ProfilCardText}>UI/UX Designer</Text>
          <Text style={styles.ProfilCardText}>4.5 years</Text>
        </View>
      </View>
    </View>
  );
};

export default Tex;

//const styles = StyleSheet.create({});
