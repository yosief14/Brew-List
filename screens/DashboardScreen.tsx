import * as React from 'react';
import { ScrollView } from 'react-native';
import NotificationCard from '../components/NotificationCard';
import { View, YStack } from 'tamagui';
import { AlertCircle, ShoppingCart } from '@tamagui/lucide-icons';


const AlertCircleIcon = <AlertCircle size={74} color='#ff2147' />
const ShoppingCartIcon = (<View style={{
  width: 74,
  height: 74,
  borderRadius: 74 / 2,
  backgroundColor: '#8C4C17',
  justifyContent: 'center',
  alignItems: 'center',

}}>
  <ShoppingCart size={40} color='#000' />
</View>)
export default function DashboardScreen({ navigation }) {
  const handlePress = (route) => {
    navigation.navigate(route)
  }
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      <YStack alignItems='center' space={"$9"}>

        <NotificationCard onPress={() => handlePress("Inventory")} description={"Items Low in Stock"} icon={AlertCircleIcon} />
        <NotificationCard onPress={() => handlePress("Shopping List")} description={"Items in Shopping List"} icon={ShoppingCartIcon} />

      </YStack>
    </ScrollView >
  );
}