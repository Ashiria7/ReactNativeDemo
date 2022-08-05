import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen } from '~/page/detail';
import { CommonScreen } from '~/page/common';

const DetailStack = createNativeStackNavigator();
export function DetailStackScreen() {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen name="Details" component={DetailsScreen} />
      <DetailStack.Screen name="Common" component={CommonScreen} />
    </DetailStack.Navigator>
  );
}
