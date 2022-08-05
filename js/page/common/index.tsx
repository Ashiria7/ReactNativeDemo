import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { HomeStackNavigationProps } from '~/routes/props/home-stack-props';
import { DetailStackProps } from '~/routes/props/detail-stack-props';

export function CommonScreen({
  navigation,
  route
}: NativeStackScreenProps<HomeStackNavigationProps | DetailStackProps, 'Common'>) {
  console.log(navigation);
  console.log(route);
  return (
    <View>
      <Text>A Common Page</Text>
    </View>
  );
}
