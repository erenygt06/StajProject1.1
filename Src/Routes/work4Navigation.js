import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import sayfa1 from '../Screens/work4/Sayfa1';
import sayfa2 from '../Screens/work4/Sayfa2';
import sayfa3 from '../Screens/work4/Sayfa3';
const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={sayfa1} />
        <Stack.Screen name="two" component={sayfa2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
