import * as React from 'react';
import { Input } from '@rneui/themed';
import { View, Text, TextInput, Pressable } from 'react-native';
import { XStack, YStack } from 'tamagui';
import { MinusCircle, PlusCircle, Undo2, AlertCircle } from '@tamagui/lucide-icons';

export default function InventoryItem(props: { name: string, quantity: number, lowQuantity: number, targetQuantity: number }) {
    const [quantity, setQuantity] = React.useState(props.quantity);
    function changeQuantity(amount: number) {
        setQuantity(quantity + amount);
    }


    return (
        <YStack alignItems='center' width={"100%"} space={20} borderBottomWidth={1} padding={15}>
            <XStack justifyContent='space-between' width={"100%"} alignItems='center'>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.name} </Text>
                <Text >{props.quantity}/{props.targetQuantity} {props.quantity <= props.lowQuantity ? <AlertCircle color="red" strokeWidth={3} size={15} /> : null}
                </Text>
            </XStack>

            <XStack justifyContent='space-between' width={"100%"} alignItems='center'>
                <Pressable onPress={() => changeQuantity(-1)} style={({ pressed }) => ({ transform: [{ scale: pressed ? 0.8 : 1 }] })}>
                    <MinusCircle color='red' strokeWidth={2} size={40} />
                </Pressable>
                <Input containerStyle={{ width: 70, height: 40, borderRadius: 30, alignItems: "center", backgroundColor: "#8C4C17" }}
                    inputContainerStyle={{ flexDirection: "column", borderBottomWidth: 0, }}
                    inputStyle={{ flexGrow: 1, color: "white", fontWeight: "bold" }}
                    returnKeyType='done'
                    inputMode='decimal'
                    defaultValue={quantity.toString()}
                    selectTextOnFocus>
                </Input>
                <Pressable onPress={() => changeQuantity(1)} style={({ pressed }) => ({ transform: [{ scale: pressed ? 0.8 : 1 }] })}>
                    <PlusCircle color='green' strokeWidth={2} size={40} />
                </Pressable>
                <Undo2 size={30} />
            </XStack>
            <XStack justifyContent='space-between' width={"100%"} alignItems='center'>



            </XStack>
        </YStack>
    )


}