import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '~/page/home';
import { CommonScreen } from '~/page/common';

const HomeStack = createNativeStackNavigator();
export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Common" component={CommonScreen} />
    </HomeStack.Navigator>
  );
}
