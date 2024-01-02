import * as React from 'react';

import { View, Text } from 'react-native';
import { XStack, YStack } from 'tamagui';

export default function InventoryItem({ name, quantity, lowQuantity }) {

    return (
        <XStack height={116} backgroundColor={'blue'} flexGrow={1}>

            <YStack space="$1" justifyContent='space-evenly' >
                <Text style={{ fontWeight: 'bold', fontSize: 20 }} >{name}</Text>

                <Text>{lowQuantity}</Text>
            </YStack>
        </XStack>
    )
}