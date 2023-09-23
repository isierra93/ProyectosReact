import { createContext } from "react";
import { cartUseReducer } from "../hooks/cartUseReducer.js"

//Crear contexto
export const CartContext = createContext()

//Crear Provider
export function CartProvider ({ children }){

    const { state, addToCart, removeFromCart, clearCart, restToCart} = cartUseReducer()

    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart,
            restToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}