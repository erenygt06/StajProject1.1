import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sayfa1 from '../Screens/Work6/Sayfa1';
import Sayfa2 from '../Screens/Work6/Sayfa2';
import Sayfa3 from '../Screens/Work6/Sayfa3';
const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Sayfa1} />
        <Stack.Screen name="two" component={Sayfa2} />
        <Stack.Screen name="tree" component={Sayfa3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
