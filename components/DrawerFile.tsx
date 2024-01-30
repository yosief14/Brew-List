import * as React from "react";
import { View, Text } from "tamagui";
import { StyleSheet } from "react-native";
export default function DrawerScreen(props: { position: number, color: string, stackIndex: number, backboardColor: string }) {
    const [selected, setSelected] = React.useState(false);


    const styles = StyleSheet.create({
        triangle: {
            width: 0,
            height: 0,
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderLeftWidth: 30,
            borderRightWidth: 30,
            borderBottomWidth: 20,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: props.backboardColor,
            transform: [{ rotate: "180deg" }],
        },
    });
    return (

        <View height={250} backgroundColor={props.color} bottom={props.position} zIndex={props.stackIndex} borderRadius={20} onPress={() => setSelected(!selected)}>

            <View style={[styles.triangle]} alignSelf="flex-end" right={50}>
                <View width={20} height={5} backgroundColor={props.color} right={10} top={15} borderRadius={2}></View>
            </View>

            <Text fontSize={30} fontWeight="bold" color="white" marginBottom={80}>
                hellow

            </Text>
        </View>

    );


}
