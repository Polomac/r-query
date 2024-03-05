import { useQuery } from 'react-query'
import MovieCard from '../components/MovieCard'

const fetchFilms = async () => {
  const resp = await fetch(`${import.meta.env.VITE_APP_API}/films`)
  return resp.json()
}

const Movies = () => {

  const { data, isError, isFetching, error } = useQuery('films', fetchFilms)

  return (
    <div className="container-lg p-3 pt-3 pt-sm-5">
      <h1>Movies</h1>
      { isFetching && (
        <div>Loading...</div>
      )}
      { isError && !isFetching && (
        <div>{ error.message }</div>
      )}
      { data?.results && !isFetching && (
        data.results.map(film => <MovieCard key={film.title} movie={film} />)
      )}
    </div>
  )
}

export default Movies