import { useQuery } from 'react-query'
import { usePostsStore } from '../store/queryStore'
import MovieCard from '../components/MovieCard'
import { useEffect } from 'react'

const fetchFilms = async () => {
  const resp = await fetch(`${import.meta.env.VITE_APP_API}/posts`)
  return await resp.json()
}

const Posts = () => {
  const setPosts = usePostsStore((store) => store.setPosts)
  const posts = usePostsStore((store) => store.posts)

  const { data, isError, isFetching, error } = useQuery('films', fetchFilms)

  useEffect(() => {
    if (data) {
      setPosts(data)
    }
  }, [data])

  return (
    <div className="container-lg p-3 pt-3 pt-sm-5">
      <h1>Movies</h1>
      { isFetching && (
        <div>Loading...</div>
      )}
      { isError && !isFetching && (
        <div>{ error.message }</div>
      )}
      { posts && !isFetching && (
        posts.map(post => <MovieCard key={post.title} post={post} />)
      )}
    </div>
  )
}

export default Posts