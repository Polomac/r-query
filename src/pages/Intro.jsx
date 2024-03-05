import { useParams, NavLink } from "react-router-dom"
import { useQuery } from 'react-query'

const Intro = () => {

  const params = useParams()

  const fetchFilm = async () => {
    const resp = await fetch(`${import.meta.env.VITE_APP_API}/films/${params.id}`)
    return resp.json()
  }

  const { data, isError, isFetching, error} = useQuery('film', fetchFilm)

  return (
    <div className="container-lg p-3 pt-3 pt-sm-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Intro</h1>
        <NavLink to="/movies">&#8678; Back</NavLink>
      </div>
      <div className="movie-card p-3">
        <h5>Episode {params.id}</h5>
        { isFetching && (
          <p>Loading...</p>
        )}
        { isError && !isFetching && (
          <div>{ error.message }</div>
        )}
        { data && !isFetching && (
          <p>{data.opening_crawl}</p>
        )}
      </div>
    </div>
  )
}

export default Intro