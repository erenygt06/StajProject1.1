import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native'
import Sayfa2 from '../Screens/Work7/Sayfa2';
import Sayfa3 from '../Screens/Work7/Sayfa3';
import Sayfa1 from '../Screens/Work7/Sayfa1';
const Drawer = createDrawerNavigator();
const DrawerNAvigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Anasayfa" component={Sayfa1} />
      <Drawer.Screen name="Eczaneler" component={Sayfa2} />
      <Drawer.Screen name="Hava Durumu" component={Sayfa3} />
    </Drawer.Navigator>
  )
}

export default DrawerNAvigation

const styles = StyleSheet.create({})