import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../service/Api";
import Loader from "../Loader/Loader";
const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let subscribed = true;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movie = await fetchMovieReviews(movieID);
        setReviews(movie);
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
      {reviews && (
        <div>
          <h2>Movie Reviews</h2>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!reviews && <div>We don't have any reviews for this movie.</div>}
    </>
  );
};
export default Reviews;
