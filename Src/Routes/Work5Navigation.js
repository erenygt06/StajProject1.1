import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import sayfa1 from '../Screens/work5/sayfa1';
import sayfa2 from '../Screens/work5/sayfa2';
import sayfa3 from '../Screens/work5/sayfa3';
const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="eren" component={sayfa1} />
      <Stack.Screen name="ernen" component={sayfa3} />
      <Stack.Screen name="ern" component={sayfa2} />
    </Stack.Navigator>
  );
};

export default navigation;
