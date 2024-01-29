import * as React from 'react';
import { Input, CheckBox } from '@rneui/themed';
import { Text, Pressable } from 'react-native';
import { useContext } from 'react';
import { ShoppingListDispatchContext } from '../context/ShoppingListContextProvider';
import { XStack, YGroup, Button, YStack } from 'tamagui';
import { Check as CheckIcon, Minus, Plus } from '@tamagui/lucide-icons';
export default function ShoppingListItem(props: { name: string, quantity: number, lowQuantity: number, targetQuantity: number, location: string }) {

    const [state, dispatch] = useContext(ShoppingListDispatchContext)
    console.log("🚀 ~ ShoppingListItem ~ state:", state)
    const item = state.items[props.name] || { quantity: props.quantity, checked: false };
    function changeQuantity(amount: number) {
        if (item.quantity + amount >= 0)
            dispatch({ type: 'setQuantity', name: props.name, quantity: item.quantity + amount });
    }
    const toggleChecked = () => { dispatch({ type: 'setChecked', name: props.name, checked: !item.checked }) };


    return (
        //TODO - Style title and quantity so that they are further apart
        <XStack display="flex" alignItems='center' justifyContent={"space-between"} width={"90%"} borderRadius={10} backgroundColor={"#1e1e24"} height={120} paddingHorizontal={10} paddingVertical={10} opacity={item.checked ? 0.5 : 1}>
            <CheckBox checked={item.checked} onPress={toggleChecked} iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                size={32}
                checkedColor='#23A24D'
                uncheckedColor='white'
                containerStyle={{ backgroundColor: "#1e1e24" }}
            >
            </CheckBox>
            <YStack flexGrow={1} height={"100%"} alignItems='center' justifyContent='space-between' >
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
                    {props.name}
                </Text>
                <Input containerStyle={{ maxWidth: 60, height: 60, padding: 0, margin: 0, justifyContent: "center", flexDirection: "row" }}
                    inputContainerStyle={{ borderBottomWidth: 0, flexDirection: "column", backgroundColor: "#111d4a", borderRadius: 60, width: 60, height: 60, elevation: 10, shadowOffset: { width: 0, height: 0 }, shadowColor: "white", shadowOpacity: 0.5, shadowRadius: 5 }}
                    inputStyle={{ fontWeight: "bold", fontSize: 15, color: "white" }}
                    returnKeyType='done'
                    inputMode='decimal'
                    defaultValue={item.quantity.toString()}
                >
                </Input>
            </YStack>

            <YGroup justifyContent='center' height={"100%"} width={60}>
                <Button icon={Plus} fontWeight={"bold"} flexGrow={1} color={"white"} backgroundColor={"#111d4a"} scaleIcon={2} size="$2" onPress={() => changeQuantity(1)} disabled={item.checked} />
                <Button icon={Minus} fontWeight={"bold"} color={"white"} backgroundColor={"black"} flexGrow={1} scaleIcon={2} size="$2" onPress={() => changeQuantity(-1)} />
                {/*TODO - wrap this input in a Pressable that sets the focus to the input*/}

            </YGroup>


        </XStack >
    )


}