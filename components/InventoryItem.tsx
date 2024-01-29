import * as React from 'react';
import { Input } from '@rneui/themed';
import { Text, Pressable } from 'react-native';
import { useContext } from 'react';
import { XStack, YStack, Button, XGroup, YGroup, Separator } from 'tamagui';
import { MinusCircle, PlusCircle, Undo2, AlertCircle, CheckCircle2, Minus, Plus } from '@tamagui/lucide-icons';

export default function InventoryItem(props: { name: string, quantity: number, lowQuantity: number, targetQuantity: number, location: string }) {
    const [quantity, setQuantity] = React.useState(props.quantity);
    function changeQuantity(amount: number) {
        setQuantity(quantity + amount);
    }

    //TODO - Style the inventory Item into cards
    return (
        <YStack alignItems='center' width={350} space={3} padding={10} borderRadius={10} backgroundColor={"white"}>

            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {props.name}

            </Text>
            <Input containerStyle={{ width: 70, height: 40, padding: 0, margin: 0 }}
                inputContainerStyle={{ borderBottomWidth: 0, }}
                inputStyle={{ fontWeight: "bold", fontSize: 20, color: props.quantity <= props.lowQuantity ? "black" : "red" }}
                returnKeyType='done'
                inputMode='decimal'
                defaultValue={quantity.toString()}
            >
            </Input>


            <XGroup height={80} separator={<Separator vertical />} width={"100%"} justifyContent='center' >
                <Button icon={Minus} fontWeight={"bold"} color={"white"} backgroundColor={"black"} scaleIcon={2} size="$6" flexGrow={1} onPress={() => changeQuantity(-1)} />
                <Button icon={Plus} fontWeight={"bold"} color={"white"} backgroundColor={"black"} scaleIcon={2} size="$6" flexGrow={1} onPress={() => changeQuantity(-1)} />
                {/*TODO - wrap this input in a Pressable that sets the focus to the input*/}

            </XGroup>
            <XGroup justifyContent='center' width={"100%"} alignItems='center' borderBlockColor={"white"}>
                <XGroup.Item>
                    <Button icon={Undo2} fontWeight={"bold"} scaleIcon={2} size="$4" flexGrow={1}>Undo</Button>
                </XGroup.Item>
                <XGroup.Item>
                    <Button icon={CheckCircle2} fontWeight={"bold"} color={"white"} backgroundColor={"#23A24D"} scaleIcon={2} size="$4" flexGrow={1}>Submit</Button>
                </XGroup.Item>
            </XGroup>
        </YStack >
    )


}