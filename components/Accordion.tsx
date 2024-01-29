import * as React from 'react';

import { View, Text, Dimensions } from 'react-native';
import { ListItem } from '@rneui/themed';

import { XStack, YStack } from 'tamagui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List } from '@tamagui/lucide-icons';

const Screen = Dimensions.get("screen").width;
export default function Accordion({ titleID, children }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const colors = { "Raisin black": "#1e1e24", "Penn red": "#92140c", "Floral white": "#fff8f0", "Sunset": "#ffcf99", "Space cadet": "#111d4a" }


    return (
        <ListItem.Accordion
            content={
                <ListItem.Content>
                    <ListItem.Title><Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>{titleID}</Text></ListItem.Title>
                </ListItem.Content>}
            isExpanded={isExpanded}
            onPress={() => setIsExpanded(!isExpanded)}
            containerStyle={{
                width: "90%", backgroundColor: "#1e1e24", borderRadius: 10, gap: 10, borderColor: colors['Raisin black'], borderWidth: 1
            }}
        >
            <YStack width={Screen} alignItems={"center"} gap={10} >
                {children}
            </YStack>
        </ListItem.Accordion >

    )

}

