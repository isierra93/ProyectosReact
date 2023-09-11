import { useCart } from "../hooks/useCart.js"
import "../styles/Products.css"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx"

export function Products ({ products }){
    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className="products">
            <ul>
                {products.map(product =>{

                    const isProductInCart = checkProductInCart(product)
                    
                    return (
                    <li key={product.id}>
                        <img 
                        src={product.thumbnail} 
                        alt={product.description} 
                        />
                        <div>
                            <strong>
                                {product.title} - $ {product.price}
                            </strong>
                        </div>
                        <div>
                            <button 
                                style={{backgroundColor: isProductInCart ? 'red' : '#09f'}}
                                onClick={() => {
                                isProductInCart 
                                    ? removeFromCart(product) 
                                    : addToCart(product)
                                }}
                            >                            
                                {
                                    isProductInCart
                                    ? <RemoveFromCartIcon />
                                    : <AddToCartIcon />
                                }
                            </button>
                        </div>
                    </li>
                    )
                })}

            </ul>
        </main>
    )
}