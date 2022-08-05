import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { HomeStackNavigationProps } from '~/routes/props/home-stack-props';

export function HomeScreen({
  navigation
}: NativeStackScreenProps<HomeStackNavigationProps, 'Home'>) {
  console.log(navigation);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Common" onPress={() => navigation.navigate('Common')} />
    </View>
  );
}
