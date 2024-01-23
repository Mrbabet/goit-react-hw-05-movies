import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { handleSearch } from "../../service/Api";
import { useDebounce } from "../../hooks/useDebounce";

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState(searchParams.get("query") || "");
  const debouncedMovieName = useDebounce(movieName, 500);

  useEffect(() => {
    const search = async () => {
      try {
        const movies = await handleSearch(debouncedMovieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      }
    };
    search();
  }, [debouncedMovieName]);
  console.log(searchResults);

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
      {searchResults.length === 0 && debouncedMovieName && (
        <div>There is no film!</div>
      )}
    </>
  );
};

export default Movies;
