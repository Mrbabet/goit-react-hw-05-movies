import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../service/Api";
import Loader from "../Loader/Loader";

const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let subscribed = true;

    setIsLoading(true);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movie = await fetchMovieCast(movieID);
        setCast(movie);
        setIsLoading(false);
      } catch (error) {}
    };

    fetchData();

    return () => {
      subscribed = false;
    };
  }, [movieID]);

  return (
    <>
      {isLoading && <Loader />}
      {cast.length !== 0 && (
        <div>
          <h2>Movie Cast</h2>
          <ul>
            {cast &&
              cast.map((actor) => (
                <li key={actor.id}>
                  <img
                    width="200px"
                    height="300px"
                    src={
                      actor.profile_path &&
                      `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    }
                    alt={actor.original_name}
                  />
                  <p>{actor.name}</p>
                </li>
              ))}
          </ul>
        </div>
      )}
      {!cast && <div>We don't have any cast for this movie.</div>}
    </>
  );
};

export default Cast;
