import { useNavigate } from 'react-router-dom'
import './MovieCard.scss'

const MovieCard = ({ post }) => {

  const navigate = useNavigate()
  
  const handleClick = (id) => {
    navigate(`/comments/${id}`)
  }

  return (
    <div className="movie-card row p-3 mx-0 mb-3" onClick={() => handleClick(post.id)}>
      <h5><em>Title: </em>{post.title}</h5>
      <p className='mb-0'>{ post.body }</p>
    </div>
  )
}

export default MovieCard