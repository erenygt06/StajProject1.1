import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sayfa1 from '../Screens/Work7/Sayfa1';
import Sayfa2 from '../Screens/Work7/Sayfa2';
import Sayfa3 from '../Screens/Work7/Sayfa3';
import DrawerNAvigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Sayfa1" component={Sayfa1} />
        <DrawerNAvigation/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
