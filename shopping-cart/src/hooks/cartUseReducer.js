import { cartInitialState, cartReducer } from "../reducers/cart.js"
import { useReducer } from "react"

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

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    const restToCart = product => dispatch({
        type: 'REST_TO_CART',
        payload: product
    })

    return { state, addToCart, removeFromCart, clearCart, restToCart }
}
