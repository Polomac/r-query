import { useParams, NavLink } from "react-router-dom"
import { useQuery } from 'react-query'

const Comments = () => {

  const params = useParams()

  const fetchFilm = async () => {
    const resp = await fetch(`${import.meta.env.VITE_APP_API}/posts/${params.id}/comments`)
    return await resp.json()
  }

  const { data, isError, isFetching, error} = useQuery('film', fetchFilm)

  return (
    <div className="container-lg p-3 pt-3 pt-sm-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Comments</h1>
        <NavLink to="/posts">&#8678; Back</NavLink>
      </div>
      <div className="movie-card p-3">
        <h5>Post id: {params.id}</h5>
        { isFetching && (
          <p>Loading...</p>
        )}
        { isError && !isFetching && (
          <div>{ error.message }</div>
        )}
        { data && !isFetching && (
          data.map((comment) => (
            <div key={comment.id}>
              <p>{comment.body}</p>
              <em>{comment.email}</em>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Comments