import React from "react";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css"
import MovieDetail from "./MovieDetail";

const MovieGrid = () => {
/*   const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/" */
  const API_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectMovie, setSelectMovie] = useState({})

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        query: searchKey,
      },
    });
    setSelectMovie(results[0])
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };
  
  <MovieDetail key={selectMovie.id} selectMovie={selectMovie.title}/>
  

  return (
    <div>
      <form onSubmit={searchMovies} className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type={"submit"}>Search</button>
      </form>


{/*       <div>
      {selectMovie.poster_path ? <img className={"movie-cover"} src={`${IMAGE_PATH}${selectMovie.poster_path}`} alt="" /> : null}
        <h5>
          {selectMovie.title}
        </h5>
        <p>{ selectMovie.overview ? selectMovie.overview : null }</p>
      </div> */}
     
      <div className="container">{renderMovies()}</div>
    </div>
  );
};

export default MovieGrid;
