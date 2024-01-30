import * as React from "react";
import { View, Text, YStack } from "tamagui";
import { View as NativeView } from "react-native";
import { ScrollView } from "react-native";
import DrawerFile from "../components/DrawerFile";

export default function DrawerScreen() {
    const colors = ["red", "green", "purple", "brown", "yellow", "blue"];

    return (
        <View flexDirection="column" alignItems="center">

            <Text fontSize={30} fontWeight="bold" color="white" marginBottom={80}>
                Drawer
            </Text>
            <ScrollView style={{ width: "90%", height: "70%", borderRadius: 20 }} snapToInterval={200} snapToAlignment="center" decelerationRate={0.1}  >
                <YStack>

                    {colors.map((color, index) => (<DrawerFile key={index} position={90 * index} color={color} stackIndex={color == "green" ? index + colors.length : index} backboardColor={index == 0 ? "black" : colors[index - 1]} />))}
                </YStack>
            </ScrollView>
        </View>
    );
}