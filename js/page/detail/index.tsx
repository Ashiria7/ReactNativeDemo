import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { DetailStackProps } from '~/routes/props/detail-stack-props';

export function DetailsScreen({
  navigation,
  route
}: NativeStackScreenProps<DetailStackProps, 'Details'>) {
  console.log(navigation);
  console.log(route);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{route.params?.content}</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('Details')} />
    </View>
  );
}
