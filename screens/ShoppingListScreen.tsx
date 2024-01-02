import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { SearchBar } from '@rneui/themed';



export default function ShoppingListScreen() {
    const [searchQuery, setSearchQuery] = React.useState('');

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
        </ScrollView>
    );
}