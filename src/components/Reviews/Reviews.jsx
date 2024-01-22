import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../service/Api";
const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    let subscribed = true;
    const fetchData = async () => {
      const movie = await fetchMovieReviews(movieID);
      setReviews(movie);
    };

    fetchData();

    return () => {
      subscribed = false;
    };
  }, [movieID]);

  return (
    <>
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
