import * as React from 'react';
import { Text, ScrollView, Platform } from 'react-native';
import { SearchBar } from '@rneui/themed';
import Accordion from '../components/Accordion';
import { ListItem, Avatar } from '@rneui/themed';
import { View, XStack, YStack } from 'tamagui';
import InventoryItem from '../components/InventoryItem';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Key } from '@tamagui/lucide-icons';

//TODO - ensure Ids for Accordions are unique
export default function ShoppingListScreen() {

    const [searchQuery, setSearchQuery] = React.useState('');

    const itemList = [
        { "name": "Cucumber", "quantity": 2, "lowQuantity": 2, "targetQuantity": 9 },
        { "name": "Milk", "quantity": 10, "lowQuantity": 7, "targetQuantity": 3 },
        { "name": "Eggs", "quantity": 4, "lowQuantity": 4, "targetQuantity": 2 },
    ];



    const childrenList = itemList.map((item, index) => (<InventoryItem key={index} name={item.name} quantity={item.quantity} lowQuantity={item.lowQuantity} targetQuantity={item.targetQuantity} />)
    )


    const search = (search) => {
        setSearchQuery(search);
    };
    return (

        <KeyboardAwareScrollView  >
            <SearchBar
                placeholder="Search"
                onChangeText={search}
                value={searchQuery}
                platform='ios'
            />

            <Accordion titleID={"test"} children={childrenList} />
        </KeyboardAwareScrollView>

    );
}