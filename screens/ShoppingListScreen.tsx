import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { SearchBar } from '@rneui/themed';
import Accordion from '../components/Accordion';
import { ListItem, Avatar } from '@rneui/themed';
import { View } from 'tamagui';


//TODO - ensure Ids for Accordions are unique
export default function ShoppingListScreen() {

    const [searchQuery, setSearchQuery] = React.useState('');

    const itemList = [
        { "name": "Cucumber", "quantity": 2, "lowQuantity": 2 },
        { "name": "Eggs", "quantity": 4, "lowQuantity": 4 },
        { "name": "Milk", "quantity": 10, "lowQuantity": 7 },
    ];

    function InventoryItem({ name, quantity, lowQuantity }) {
        console.log("🚀 ~ file: ShoppingListScreen.tsx:20 ~ InventoryItem ~ name:", name)

        return (
            <View>
                <Text>{name}</Text>
                <Text>{quantity}</Text>
                <Text> {lowQuantity}</Text>
            </View>
        )
    }


    const childrenList = itemList.map((item, index) => (<InventoryItem key={index} name={item.name} quantity={item.quantity} lowQuantity={item.lowQuantity} />)
    )
    console.log(childrenList)

    const search = (search) => {
        setSearchQuery(search);
    };
    return (
        <ScrollView >
            <SearchBar
                placeholder="Search"
                onChangeText={search}
                value={searchQuery}
                platform='ios'
            />

            <Accordion titleID={"test"} children={childrenList} />
        </ScrollView>
    );
}