import withResults from "../mocks/withResults.json"
import noResults from "../mocks/noResults.json"

export function useMovies (){
    const movies = withResults.Search
    
    if(!movies.length>0) return { movies : movies }
    
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    
    return { movies : mappedMovies }
  }