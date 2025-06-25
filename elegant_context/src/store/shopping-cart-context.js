import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

// Starting with uppercase character because this value will actually contain a React component
// Setting the default value here gives you better auto-completion
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {}
});

// Reducer function will always need state and action parameter
function shoppingCartReducer(state, action)  {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];
    
        const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
        const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
        } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
            id: action.payload,
            name: product.title,
            price: product.price,
            quantity: 1,
        });
        }

        return {
            ...state, // not technically needed here because items is the only piece of data in state but good practice for more complex state
            items: updatedItems,
        };
    }
    if (action.type === 'UPDATE_ITEM') {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
        );

        const updatedItem = {
        ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.payload.amount;

        if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
        } else {
        updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems,
        };
    }

    return state;
}

export default function CartContextProvider({children}) {
    // First value is the state managed by the reducer
    // Second value is the dispatch function
    const [shoppingCartState, shoppingCartDispatch] = useReducer(
        shoppingCartReducer,
        {
            items: []
        }
    );

      // Parameter passed to dispatch is what comes to the action parameter of the reducer function
      function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: 'ADD_ITEM',
            payload: id
        });
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type: 'UPDATE_ITEM',
            payload: {
                productId,
                amount
            }
        })
      }
    
      const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity
      }

      return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
      )
}