import {prototype} from 'events';
import {StyleSheet, Dimensions, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  EnTepeScrool: {
    width: windowWidth * 1,
    height: windowWidth * 1.35,
  },
  AramaButonKapsayan: {
    marginTop: windowWidth * 0.08,
    alignItems: 'center',
  },
  AramaButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: windowWidth * 0.9,
    height: windowWidth * 0.13,
    backgroundColor: '#F1F6F8',
    borderRadius: windowWidth * 0.1,
  },
  AramaText: {
    marginTop: windowWidth * 0.04,
    marginRight: windowWidth * 0.03,
    marginLeft: windowWidth * 0.03,
    fontWeight: '700',
  },
  Aramaimage: {
    marginTop: windowWidth * 0.03,
    marginRight: windowWidth * 0.03,
    tintColor: 'orange',
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
  },

  KayarView: {
    alignItems: 'center',
  },
  KayarProfil: {
    marginTop: windowWidth * 0.05,
    marginLeft: windowWidth * 0.06,
    width: windowWidth * 0.94,
    height: windowWidth * 0.19,
    flexDirection: 'row',
  },
  Kayarimage: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
  },
  KayarText: {
    fontWeight: '700',
    marginLeft: windowWidth * 0.035,
  },
  KayarViewBosluk: {
    marginLeft: windowWidth * 0.05,
  },

  ProfilCard1: {
    width: windowWidth * 0.88,
    height: windowWidth * 0.4,
    backgroundColor: '#F99D92',
    borderRadius: windowWidth * 0.06,
    marginTop: windowWidth * 0.04,
    flexDirection: 'row',
  },
  ProfilCard2: {
    width: windowWidth * 0.88,
    height: windowWidth * 0.4,
    backgroundColor: '#73D8B4',
    borderRadius: windowWidth * 0.06,
    marginTop: windowWidth * 0.04,
    flexDirection: 'row',
  },
  ProfilCard3: {
    width: windowWidth * 0.88,
    height: windowWidth * 0.4,
    backgroundColor: '#85D7EF',
    borderRadius: windowWidth * 0.06,
    marginTop: windowWidth * 0.04,
    flexDirection: 'row',
  },
  ProfilCardView: {
    alignItems: 'center',
  },
  ProfilCardimage: {
    marginTop: windowWidth * 0.02,
    width: windowWidth * 0.4,
    height: windowWidth * 0.38,
  },
  ProfilCardTextTitle: {
    color: 'white',
    fontWeight: '900',
    fontSize: windowWidth * 0.06,
    marginLeft: windowWidth * 0.07,
    marginTop: windowWidth * 0.1,
  },
  ProfilCardText: {
    marginTop: windowWidth * 0.01,
    color: 'white',
    marginLeft: windowWidth * 0.07,
  },
  BottumMenuView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BottumMenuicons1: {
    tintColor: 'yellow',
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    marginLeft: windowWidth * 0.05,
    marginTop: windowWidth * 0.01,
  },
  BottumMenuicons2_4: {
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    marginLeft: windowWidth * 0.05,
    marginTop: windowWidth * 0.01,
  },
  BottumMenuicons3: {
    tintColor:"orange",
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    marginLeft: windowWidth * 0.05,
    marginBottom: windowWidth * 0.1,
    position: 'relative',
    bottom: windowWidth * 0.04,
  },
  BottumMenuicons5: {
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    marginLeft: windowWidth * 0.05,
    marginTop: windowWidth * 0.01,
  },
});
export const BottumMenuicons3 = props => {
  return (
    <View
      style={{
        tintColor: props.tintColor,
      }}></View>
  );
};
BottumMenuicons3.defaultProps = {
  style:{
    tintColor:"purple",
  }
}
