import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ilk from '../Screens/work3/ilk';
import iki from '../Screens/work2/iki';
const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={ilk} />
        <Stack.Screen name="two" component={iki} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
