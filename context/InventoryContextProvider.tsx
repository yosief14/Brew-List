import * as React from 'react';
import { getItemList } from '../services/inventoryDataServices';

export const InventoryContext = React.createContext(null);

export function InventoryProvider({ children }) {

    const [inventory, setInventory] = React.useState([]);
    const updateQuantity = (locationName: string, itemName: string, newQuantity: number) => {
        setInventory((prevInventory) => {
            const newInventory = [...prevInventory];
            newInventory[locationName].items[itemName].quantity = newQuantity;
            return newInventory;
        });
    }


    React.useEffect(() => {
        const itemList = getItemList();
        setInventory(itemList);
    }, []);


    return (
        <InventoryContext.Provider value={{ inventory, updateQuantity }}>
            {children}
        </InventoryContext.Provider>
    );
}