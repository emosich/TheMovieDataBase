import React from 'react';
import { Link } from 'react-router-dom';


const MovieCard = ({movie}) => {

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/"

  return (
    <Link to="moviedetail" key={movie.id} movie={movie}>
      <div className='movie-card'>
            {movie.poster_path ? <img className={"movie-cover"} src={`${IMAGE_PATH}${movie.poster_path}`} alt="" /> : null}
            <h5 className={"movie-title"}>{movie.title}</h5>
      </div>
    </Link>
  )
}

export default MovieCard