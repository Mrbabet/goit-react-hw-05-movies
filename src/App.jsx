import React, { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const MoviesDetails = lazy(() => import("./pages/MoviesDetails/MoviesDetails"));

const App = () => {
  return (
    <>
      <nav>
        <Link to="/goit-react-hw-05-movies/">Home</Link>
        <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieID"
            element={<MoviesDetails />}
          >
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
