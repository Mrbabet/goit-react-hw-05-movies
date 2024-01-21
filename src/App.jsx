import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Reviews from "./components/Reviews/Reviews";
import NotFound from "./components/NotFound/NotFound";
import Cast from "./components/Cast/Cast";
import MoviesDetails from "./components/MoviesDetails/MoviesDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Home />} />
        <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route
          path="/goit-react-hw-05-movies/moviesdetails"
          element={<MoviesDetails />}
        />
        <Route path="/goit-react-hw-05-movies/reviews" element={<Reviews />} />
        <Route path="/goit-react-hw-05-movies/cast" element={<Cast />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
