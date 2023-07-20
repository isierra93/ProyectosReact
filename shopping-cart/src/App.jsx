import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products.jsx"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { useContext, useState } from "react"
import { FiltersContext } from "./context/filter.jsx"

export function useFilters () {
  
  const {filters, setFilters} = useContext(FiltersContext)

  const filterProducts = (products) =>{
    return products.filter(product =>{
      return (
      product.price > filters.minPrice &&
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
      )
    })
  }


  return { filterProducts, setFilters, filters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters, filters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <h1>Shopping cart</h1>
      <Products products={filteredProducts}/>
      <Footer filters={filters}/>
    </>
  )
}

export default App
