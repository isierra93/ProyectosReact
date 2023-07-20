import { useState, useId } from "react"
import "../styles/Filters.css"

export function Filters ({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) =>{

        setMinPrice(event.target.value)
        onChange(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{

        setMinPrice(event.target.value)
        onChange(prevState =>({
            ...prevState,
            category: event.target.value
        }))
    }


    return(
        <section className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" 
                id={minPriceFilterId}
                min='0'
                max='1500'
                onChange={handleChangeMinPrice}/>
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}