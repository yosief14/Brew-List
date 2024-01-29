import * as React from 'react'

import { View, Text } from 'react-native'

import { XGroup, XStack, YStack, Button } from 'tamagui'

import { List } from '@tamagui/lucide-icons'

export default function TabBar({ navigation }) {

    return (
        <XGroup alignSelf='center' backgroundColor={"red"}  >
            <XGroup.Item>
                <Button icon={List} fontWeight={"bold"} scaleIcon={2} flexGrow={1} size="$4" onPress={() => navigation.navigate('Home')}></Button>
            </XGroup.Item>
            <XGroup.Item>
                <Button icon={List} fontWeight={"bold"} scaleIcon={2} flexGrow={1} size="$4" onPress={() => navigation.navigate('Inventory')}></Button>
            </XGroup.Item>
            <XGroup.Item>
                <Button icon={List} fontWeight={"bold"} scaleIcon={2} flexGrow={1} size="$4" onPress={() => navigation.navigate('Shopping List')}></Button>
            </XGroup.Item>
        </XGroup>
    )
}