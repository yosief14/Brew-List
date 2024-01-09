var itemList = [
    {
        "location": "Fridge", "items": [
            { "name": "Cucumber", "quantity": 2, "lowQuantity": 2, "targetQuantity": 9 },
            { "name": "Milk", "quantity": 10, "lowQuantity": 7, "targetQuantity": 3 },
            { "name": "Eggs", "quantity": 4, "lowQuantity": 4, "targetQuantity": 2 },
            { "name": "Chicken", "quantity": 4, "lowQuantity": 4, "targetQuantity": 10 },
        ]
    },
    {
        "location": "Pantry", "items": [
            { "name": "Rice", "quantity": 2, "lowQuantity": 2, "targetQuantity": 9 },
            { "name": "Pasta", "quantity": 10, "lowQuantity": 7, "targetQuantity": 14 },
            { "name": "Cereal", "quantity": 4, "lowQuantity": 4, "targetQuantity": 30 },
        ]
    },
    {
        "location": "Freezer", "items": [
            { "name": "Ice Cream", "quantity": 2, "lowQuantity": 2, "targetQuantity": 9 },
            { "name": "Pizza", "quantity": 10, "lowQuantity": 7, "targetQuantity": 3 },
            { "name": "Chicken", "quantity": 4, "lowQuantity": 4, "targetQuantity": 10 },
            { "name": "Fish", "quantity": 4, "lowQuantity": 4, "targetQuantity": 2 },
        ]
    },
]


//For now, this is just a placeholder for the database and I'm adding unique ids to the items by combining the name and location
export const getItemList = () => {

    return itemList;
}