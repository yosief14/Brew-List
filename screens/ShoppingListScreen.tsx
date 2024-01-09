import * as React from 'react';
import { Text, View, ScrollView, } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { Accordion, Square, } from 'tamagui';
import { ChevronDown } from '@tamagui/lucide-icons'
import InventoryItem from '../components/InventoryItem';


export default function InventoryScreen() {

    const [searchQuery, setSearchQuery] = React.useState('');

    const search = (search) => {
        setSearchQuery(search);
    };

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} >
            <SearchBar
                placeholder="Search"
                onChangeText={search}
                value={searchQuery}
                platform='ios'
                containerStyle={{ width: '90%', backgroundColor: '#2C1B47', borderRadius: 10, }}
            />
            <Accordion width="100%" type="multiple" >
                <Accordion.Item value="a1" borderWidth={0}>
                    <Accordion.Trigger flexDirection="row" justifyContent="space-between" backgroundColor="white" borderTopWidth={0}>
                        {({ open }) => (
                            <>
                                <Text>1. Take a cold shower</Text>
                                <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                                    <ChevronDown size="$1" />
                                </Square>
                            </>
                        )}
                    </Accordion.Trigger>
                    <Accordion.Content backgroundColor="red" borderWidth={'0'} margin={0}>
                        <InventoryItem name="Cucumber" quantity={2} lowQuantity={2} />
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="a2">
                    <Accordion.Trigger flexDirection="row" justifyContent="space-between" backgroundColor="white" borderTopWidth={0}>
                        {({ open }) => (
                            <>
                                <Text>2. Eat 4 eggs</Text>
                                <Square animation="quick" rotate={open ? '180deg' : '0deg'}>
                                    <ChevronDown size="$1" />
                                </Square>
                            </>
                        )}
                    </Accordion.Trigger>
                    <Accordion.Content>
                        <Text>
                            Eggs have been a dietary staple since time immemorial and there’s good reason
                            for their continued presence in our menus and meals.
                        </Text>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        </ScrollView>
    );
}