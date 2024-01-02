import * as React from 'react';
import { Text, View } from 'react-native';
import { Card } from '@tamagui/card';
import { AlertCircle, MoveRight } from '@tamagui/lucide-icons';
import { Image, XStack, YStack, ZStack } from 'tamagui';

export default function NotificationCard({ description, onPress, icon }) {

    return (
        <Card onPress={onPress} elevation={8} bordered width={350} height={137} padding={"$2"} justifyContent='center' pressStyle={{ scale: 0.875 }} >
            <XStack justifyContent={"space-around"} alignItems='center' >
                {icon}
                <Text style={{ fontSize: 10, fontWeight: "600" }}>{description}</Text>
                <MoveRight size={27} />
            </XStack>
        </Card>
    );
}