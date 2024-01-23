import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../../service/Api";

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
      <h2>Trending Movies</h2>
      <ul>
        {trending &&
          trending.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>
                  {" "}
                  {(movie.title && movie.title) || (movie.name && movie.name)}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Home;
