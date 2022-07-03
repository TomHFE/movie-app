import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
import { Link } from "react-router-dom";

import React from "react";
import { useParams } from "react-router";
import ErrorBoundary from "./ErrorBoundary";

// const API_URL = ` http://www.omdbapi.com/?i=tt3896198&apikey=5d887735`;
// http://www.omdbapi.com/?apikey=5d887735&i=tt3896198&plot=full

// const Movie1 = {
//   Title: "Italian Spiderman",
//   Year: "2007",
//   imdbID: "tt2705436",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
// };

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    SearchParams("Hello World");
  }, []);
// trycatch look it up 
  const SearchParams = async (title) => {
    const res = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=5d887735&s=${title}`
    );
    const data = await res.json();

    setMovies(data.Search);
    console.log(data.Search);
  };

  return (
    <div className="app" key={indexedDB}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          SearchParams(searchTerm);
        }}
      >
        <div className="search">
          <input
            placeholder="search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => SearchParams(searchTerm)}
          />
        </div>
      </form>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Link to={`/details/${movie.imdbID}`}>
              <MovieCard
                movie={movie}
                value={movie.imdbID}
                key={movie.imdbID}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
};

const WrappedSearchMovies = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <SearchMovies params={params} />
    </ErrorBoundary>
  );
};

export default WrappedSearchMovies;

// link to a new page link that page to the api
// try catch error
