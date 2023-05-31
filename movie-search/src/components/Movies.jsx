export const Movies = ({movies}) =>{

    const hasMovies = movies?.length>0
    
    return(
        <>
        {hasMovies ?
            < ListOfMovies movies={movies}/>
            :
            < NoMoviesFound />
        }
        </>)
}

function ListOfMovies ({movies}) {
    return(
        <ul>
            {movies.map((movie) =>{
              return(
                <li key={movie.id}>
                  <h3>{movie.title} - {movie.year}</h3>
                  <img src={movie.poster} alt={movie.title} />
                </li>
              )
            })}
          </ul>
    )
}

function NoMoviesFound () {
    return(
        <p>No se encontraron resultados para esa busqueda.</p>
    )
}