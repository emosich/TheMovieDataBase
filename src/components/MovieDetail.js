import React from 'react'

const MovieDetail = ({Movie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/"
  return (
    <div>
        {console.log(Movie)}
{/*     {selectMovie.poster_path ? <img className={"movie-cover"} src={`${IMAGE_PATH}${selectMovie.poster_path}`} alt="" /> : null}
      <h5>
        {selectMovie.title}
      </h5>
      <p>{ selectMovie.overview ? selectMovie.overview : null }</p> */}
    </div>
  )
}

export default MovieDetail