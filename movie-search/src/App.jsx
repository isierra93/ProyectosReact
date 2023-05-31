import './App.css'
import {useMovies} from "./hooks/useMovies.js"
import { Movies } from './components/Movies.jsx'
import { useRef, useState } from 'react'



function App() {

  const { movies : mappedMovies } = useMovies()
  const [query, setQuery] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    console.log({query});
  }

  function handleChange (e) {
    setQuery(e.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' action='' onSubmit={handleSubmit}>
          <input 
          name='query' 
          value={query} 
          onChange={handleChange} 
          type='text' 
          placeholder='Avengers, Toy Story, Gato con botas, etc' />
            <button type='submit' >Buscar</button>
        </form>
      </header>
      <main>
        <section>
          <Movies movies={mappedMovies}/>
        </section>
      </main>
    </div>
  )
}

export default App
