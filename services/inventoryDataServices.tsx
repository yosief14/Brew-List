var itemList = [
    {
        "location": "Fridge", "items": [
            { "name": "Cucumber", "quantity": 2, "lowQuantity": 2, "targetQuantity": 9, "Store": "KingSoopers" },
            { "name": "Milk", "quantity": 10, "lowQuantity": 7, "targetQuantity": 3, "Store": "KingSoopers" },
            { "name": "Eggs", "quantity": 4, "lowQuantity": 4, "targetQuantity": 2, "Store": "KingSoopers" },
            { "name": "Chicken", "quantity": 4, "lowQuantity": 4, "targetQuantity": 10, "Store": "KingSoopers" },
        ], "Store": "Kingsoopers"
    },
    {
        "location": "Pantry", "items": [
            { "name": "Rice", "quantity": 2, "lowQuantity": 2, "targetQuantity": 9, "Store": "Walmart" },
            { "name": "Pasta", "quantity": 10, "lowQuantity": 7, "targetQuantity": 14, "Store": "Walmart" },
            { "name": "Cereal", "quantity": 4, "lowQuantity": 4, "targetQuantity": 30, "Store": "Walmart" },
        ]
    },
    {
        "location": "Freezer", "items": [
            { "name": "Ice Cream", "quantity": 2, "lowQuantity": 2, "targetQuantity": 9, "Store": "Walmart" },
            { "name": "Pizza", "quantity": 10, "lowQuantity": 7, "targetQuantity": 3, "Store": "KingSoopers" },
            { "name": "Chicken", "quantity": 4, "lowQuantity": 4, "targetQuantity": 10, "Store": "KingSoopers" },
            { "name": "Fish", "quantity": 4, "lowQuantity": 4, "targetQuantity": 2, "Store": "KingSoopers" },
        ]
    },
]


//For now, this is just a placeholder for the database and I'm adding unique ids to the items by combining the name and location
export const getItemList = () => {

    return itemList;
}