import React, { useState } from 'react';


const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const movieToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWY2NGRkNjk2MjdhYzg4OGFjM2JmZWM5MTdiY2I2NyIsInN1YiI6IjY1NzhiNzg4YmJlMWRkMDBjNDBkNmExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n90qVY23fB2nW1s6KOnQhQE5UKKQ9ydypPNk2lWqdWM";
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${movieToken}`
    }
  };

  const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  const handleButtonClick = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`;
    const data = await fetchData(url, options);
    setMovies(data.results);
  };

  const handleMovieClick = async (movieId) => {
    const similarUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`;
    const data = await fetchData(similarUrl, options);
    setMovies(data.results);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search movies"
      />
      <button onClick={handleButtonClick}>Search</button>
   
      {movies.map((movie) => (
        <h2
          key={movie.id}
          className="movieName"
          onClick={() => handleMovieClick(movie.id)}
        >
          {movie.title}
        </h2>
      ))}
    </div>
  );
};

export default Movie;