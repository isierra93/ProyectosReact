import { cartInitialState, cartReducer } from "../reducers/cart.js";
import { createContext, useReducer } from "react";

//Crear contexto
export const CartContext = createContext()

export function cartUseReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState) 

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = product => dispatch({
        type: 'CLEAR_CART',
        payload: product
    })

    return { state, addToCart, removeFromCart, clearCart}
}


//Crear Provider
export function CartProvider ({ children }){

    const { state, addToCart, removeFromCart, clearCart} = cartUseReducer()

    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}