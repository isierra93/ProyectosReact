import { useId } from "react"
import { useFilters } from "../hooks/useFilters.js"
import "../styles/Filters.css"


export function Filters () {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) =>{

        setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{

        setFilters(prevState =>({
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
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
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