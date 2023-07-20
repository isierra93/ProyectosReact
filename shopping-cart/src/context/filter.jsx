import { createContext, useState } from "react";

//Crea el contexto
export const FiltersContext = createContext()

//Crea el Provider para proveer el contexto
export function FiltersProvider ({ children }) {
    const [filters , setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}