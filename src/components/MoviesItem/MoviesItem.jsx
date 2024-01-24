import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const MoviesItem = ({ item }) => {
  return (
    <>
      {item &&
        item.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>
                {(movie.title && movie.title) || (movie.name && movie.name)}
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default MoviesItem;
