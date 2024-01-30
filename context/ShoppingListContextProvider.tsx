import React, { createContext, useReducer, useContext } from 'react';

// ? Creates a State object
type State = {
    shoppingItems: { [key: string]: { quantity: number, checked: boolean } };
};

// ? Creates a Action object
type Action =
    | { type: 'setQuantity'; name: string; quantity: number }
    | { type: 'setChecked'; name: string; checked: boolean };

const initialState: State = {
    shoppingItems: {
        "Apples": { quantity: 5, checked: false },
        "Oranges": { quantity: 3, checked: true },
        "Bananas": { quantity: 7, checked: false }
    }
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'setQuantity':
            return { ...state, shoppingItems: { ...state.shoppingItems, [action.name]: { ...state.shoppingItems[action.name], quantity: action.quantity } } };
        case 'setChecked':
            return { ...state, shoppingItems: { ...state.shoppingItems, [action.name]: { ...state.shoppingItems[action.name], checked: action.checked } } };
        default:
            return state;
    }
}

// ? Creates a Context object 
// ? The context object contains a state and a dispatch function
// ? The context object is initialized with the initialState and an empty dispatch function
// ? The Dispatch function is a type definityion usid in conjucation with useReducer
// ? useReducer is a allternative to useState that is preferable when complex state logic
//TODO - Figure out why when I pass initialState.items to createContext it works but when I pass just initialState it doesn't

export const ShoppingListItemsContext = createContext(initialState.shoppingItems);
export const ShoppingListDispatchContext = createContext<React.Dispatch<Action>>(null);

//TODO revisit dispatch
export function ShoppingListContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ShoppingListItemsContext.Provider value={state.shoppingItems}>
            <ShoppingListDispatchContext.Provider value={dispatch}>
                {children}
            </ShoppingListDispatchContext.Provider>
        </ShoppingListItemsContext.Provider>
    );
}

