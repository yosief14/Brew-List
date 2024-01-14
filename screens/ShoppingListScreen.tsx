import * as React from 'react';
import { SearchBar } from '@rneui/themed';
import Accordion from '../components/Accordion';
import { View } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getItemList } from '../services/inventoryDataServices';
import { InventoryContext } from '../context/InventoryContextProvider';

//TODO - ensure Ids for Accordions are unique
export default function ShoppingListScreen() {

    const [searchQuery, setSearchQuery] = React.useState('');
    const { inventory } = React.useContext(InventoryContext);

    const search = (search) => {
        setSearchQuery(search);
    };
    function getShoppingList() {

    }
    const getInventoryListComponents = () => {
        const retList = [];

        for (let i = 0; i < inventory.length; i++) {
            const location = inventory[i].location;
            const childrenList = inventory[i].items.map((item, index) => (<ShoppingListItem key={index} name={item.name} quantity={item.quantity} lowQuantity={item.lowQuantity} targetQuantity={item.targetQuantity} location={location} />)
            )
            console.log("🚀 ~ getInventoryListComponents ~ ShoppingListItem:", ShoppingListItem)
            retList.push(<Accordion key={i} titleID={inventory[i].location} children={childrenList} />)

        }
        console.log("🚀 ~ getInventoryListComponents ~ retList:\n", retList)
        return retList;
    }

    const accordionFolder = getInventoryListComponents();
    return (

        <KeyboardAwareScrollView contentContainerStyle={{ alignItems: "center", gap: 10 }}  >
            <SearchBar
                placeholder="Search"
                onChangeText={search}
                value={searchQuery}
                platform='ios'
                containerStyle={{ width: '90%', backgroundColor: '#f4f5f7', borderRadius: 10 }}
            />

            {accordionFolder}

        </KeyboardAwareScrollView>

    );
}