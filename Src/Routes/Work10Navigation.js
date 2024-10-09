import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sayfa1 from '../Screens/work10/Sayfa1';
import Sayfa2 from '../Screens/work10/Sayfa2';
import UserProvider from '../context/Provider';

const Stack = createNativeStackNavigator();

const navigation = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={Sayfa1} />
          <Stack.Screen name="two" component={Sayfa2} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default navigation;
