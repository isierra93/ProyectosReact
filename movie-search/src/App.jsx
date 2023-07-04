import './App.css'
import { useMovies } from "./hooks/useMovies.js"
import { Movies } from './components/Movies.jsx'
import { useEffect, useState } from 'react'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() =>{
    if(search === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if(search.length < 3){
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  },[search])

  return {search, updateSearch, error}
}

// 56

function App() {
  
  const {search , updateSearch, error} = useSearch()
  const { movies , getMovies } = useMovies({ search })
  

  function handleSubmit(e){
    e.preventDefault()
    getMovies()
    console.log({search});
  }

  function handleChange (e) {
    updateSearch(e.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' action='' onSubmit={handleSubmit}>
          <input 
          required
          name='query' 
          value={search} 
          onChange={handleChange} 
          type='text' 
          placeholder='Avengers, Toy Story, Gato con botas, etc' />
            <button type='submit' >Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main>
          <Movies movies={movies}/>  
      </main>
    </div>
  )
}

export default App
