import React, { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../service/Api";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesItem from "../../components/MoviesItem/MoviesItem";
import Title from "../../components/Title/Title";

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    let subscribed = true;
    const fetchData = async () => {
      const movies = await fetchTrendingMovies();
      setTrending(movies);
    };
    fetchData();

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <>
      <Title title="Trending Movies" />

      <MoviesList>
        <MoviesItem item={trending} />
      </MoviesList>
    </>
  );
};

export default Home;
