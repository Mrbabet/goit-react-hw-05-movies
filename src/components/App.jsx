import React, { lazy } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const Cast = lazy(() => import("./Cast/Cast"));
const MoviesDetails = lazy(() =>
  import("../pages/MoviesDetails/MoviesDetails")
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieID" element={<MoviesDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
