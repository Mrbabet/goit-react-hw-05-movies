import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../service/Api";

const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    let subscribed = true;
    const fetchData = async () => {
      const movie = await fetchMovieCast(movieID);
      setCast(movie);
    };

    fetchData();

    return () => {
      subscribed = false;
    };
  }, [movieID]);

  console.log(cast);

  return (
    <>
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
