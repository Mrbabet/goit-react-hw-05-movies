import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Reviews from "./components/Reviews/Reviews";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default App;
