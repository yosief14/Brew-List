import * as React from 'react';

import { View, Text } from 'react-native';
import { ListItem } from '@rneui/themed';

import { XStack, YStack } from 'tamagui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List } from '@tamagui/lucide-icons';

export default function Accordion({ titleID, children }) {
    const [isExpanded, setIsExpanded] = React.useState(false);



    return (
        <>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title><Text>{titleID}</Text></ListItem.Title>
                    </ListItem.Content>}
                isExpanded={isExpanded}
                onPress={() => setIsExpanded(!isExpanded)}
            >
                {children.map((child, index) => (<ListItem key={index}>{child}</ListItem>))}

            </ListItem.Accordion>
        </>
    )

}

