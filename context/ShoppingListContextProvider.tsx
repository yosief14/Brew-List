import React, { createContext, useReducer, useContext } from 'react';

// ? Creates a State object
type State = {
    items: { [key: string]: { quantity: number, checked: boolean } };
};

// ? Creates a Action object
type Action =
    | { type: 'setQuantity'; name: string; quantity: number }
    | { type: 'setChecked'; name: string; checked: boolean };

const initialState: State = { items: {} };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'setQuantity':
            return { ...state, items: { ...state.items, [action.name]: { ...state.items[action.name], quantity: action.quantity } } };
        case 'setChecked':
            return { ...state, items: { ...state.items, [action.name]: { ...state.items[action.name], checked: action.checked } } };
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

export const ShoppingListItemsContext = createContext<State>(initialState);
export const ShoppingListDispatchContext = createContext<React.Dispatch<Action>>(null);

//TODO revisit dispatch
export function ShoppingListContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ShoppingListItemsContext.Provider value={state}>
            <ShoppingListDispatchContext.Provider value={dispatch}>
                {children}
            </ShoppingListDispatchContext.Provider>
        </ShoppingListItemsContext.Provider>
    );
}

