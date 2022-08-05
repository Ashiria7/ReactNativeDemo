import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from '~/routes/navigations/home-stack-navigtion';
import { DetailStackScreen } from '~/routes/navigations/detial-stack-navigation';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="DetailsStack" component={DetailStackScreen} />
    </Tab.Navigator>
  );
}
