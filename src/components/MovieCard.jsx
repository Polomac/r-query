import { useNavigate } from 'react-router-dom'
import './MovieCard.scss'

const MovieCard = ({ movie }) => {

  const navigate = useNavigate()
  
  const handleClick = (id) => {
    navigate(`/intro/${id}`)
  }

  return (
    <div className="movie-card row p-3 mx-0 mb-3" onClick={() => handleClick(movie.episode_id)}>
      <h5><em>Title:</em>{movie.title}</h5>
      <p><em>Episode:</em> { movie.episode_id }</p>
    </div>
  )
}

export default MovieCard