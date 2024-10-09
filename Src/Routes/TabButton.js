import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sayfa1 from '../Screens/Work7/Sayfa1';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Sayfa1 from '../Screens/Work7/Sayfa1';
import Sayfa2 from '../Screens/Work7/Sayfa2';
const Tab = createBottomTabNavigator();

export default TabButton = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Sayfa1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Sayfa2} />
    </Tab.Navigator>
  );
};