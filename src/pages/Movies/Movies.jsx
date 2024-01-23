import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { handleSearch } from "../../service/Api";

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState(searchParams.get("query") || "");

  useEffect(() => {
    const search = async () => {
      try {
        const movies = await handleSearch(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      }
    };
    search();
  }, [movieName]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (value) => {
    setMovieName(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Movie Search</h2>
        <input
          type="text"
          value={movieName}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="type here"
        />
      </form>

      {searchResults &&
        searchResults.map((film) => {
          return (
            <div key={film.id}>
              <Link to={`${film.id}`}>{film.title}</Link>
            </div>
          );
        })}
      {searchResults.length === 0 && movieName && <div>There is no film!</div>}
    </>
  );
};

export default Movies;
