import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { handleSearch } from "../../service/Api";
import { useDebounce } from "../../hooks/useDebounce";
import Title from "../../components/Title/Title";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesItem from "../../components/MoviesItem/MoviesItem";
import SearchForm from "../../components/SearchForm/SearchForm";

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (value) => {
    setMovieName(value);
  };

  const goBackfunc = () => {};

  return (
    <>
      <Title title=" Movie Search" />
      <SearchForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={movieName}
      />

      <MoviesList>
        <MoviesItem item={searchResults} />
        {searchResults.length === 0 && debouncedMovieName && (
          <div>There is no film!</div>
        )}
      </MoviesList>
    </>
  );
};

export default Movies;
