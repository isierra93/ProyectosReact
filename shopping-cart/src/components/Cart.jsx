import "../styles/Cart.css"
import { useId } from "react"
import { ClearCartIcon, CartIcon } from "./Icons.jsx"
import { useCart } from "../hooks/useCart.js"

function CartItem ({thumbnail, title, price, quantity, addToCart, restToCart}) {
    return (
        <li >
        <img 
            src={thumbnail}
            alt={title}
        />
        <div>
            <strong>
                {title} - $ {price}
            </strong>
        </div>
        <footer>
            <small >
                QTY: {quantity}
            </small>
            <button onClick={restToCart}>-</button>
            <button onClick={addToCart}>+</button>
        </footer>
        </li>
    )
}

export function Cart (){
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart, restToCart} = useCart()

    return(
        <>
            <label htmlFor={cartCheckboxId} className="cart-button">
                <CartIcon/>
            </label>
            <input type="checkbox" id={cartCheckboxId}  hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem 
                        key={product.id}
                        addToCart={() => addToCart(product)}
                        restToCart={() =>restToCart(product)}
                        {...product}
                        />

                    ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}