import "../styles/Products.css"
import { AddToCartIcon } from "./Icons.jsx"

export function Products ({ products }){
    return (
        <main className="products">
            <ul>
                {products.map(product =>(
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
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                )
                )}
            </ul>
        </main>
    )
}