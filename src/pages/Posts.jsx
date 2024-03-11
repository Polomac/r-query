import { useQuery } from 'react-query'
import MovieCard from '../components/MovieCard'

const fetchFilms = async () => {
  const resp = await fetch(`${import.meta.env.VITE_APP_API}/posts`)
  return await resp.json()
}

const Posts = () => {

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
      { data && !isFetching && (
        data.map(post => <MovieCard key={post.title} post={post} />)
      )}
    </div>
  )
}

export default Posts