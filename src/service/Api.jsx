import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const params = {
  params: {
    api_key: "f38e9284b51d1fffd633993a0543994f",
    language: "en-US",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response.data;
};

export const handleSearch = async (movieName) => {
  const response = await axios.get(`/search/movie?query=${movieName}`, params);
  return response.data.results;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits?`, params);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews?`, params);
  return response.data.results;
};
