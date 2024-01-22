import React, { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../service/Api";
const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieID } = useParams();

  useEffect(() => {
    let subscribed = true;
    const fetchData = async () => {
      const movie = await fetchMovieDetails(movieID);
      setMovieDetails(movie);
    };

    fetchData();

    return () => {
      subscribed = false;
    };
  }, [movieID]);

  return (
    <>
      <div>
        <img
          src={
            movieDetails.poster_path &&
            `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
          }
          alt={movieDetails.title}
        />
        <h1>Title : {movieDetails.title && movieDetails.title}</h1>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
