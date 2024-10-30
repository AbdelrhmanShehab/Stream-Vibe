import React from "react";
import "./assets/App.css";
import Home from "./pages/Home/Home";
import MoviesShows from "./pages/Movies/MoviesShows";
import Support from "./pages/Support/Support";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import MoviePage from "./pages/movie details/MoviePage";
import MovieList from "./pages/MovieList/MovieList";
import AllMovies from "./pages/AllMovies/AllMovies";
import TrendingMovies from "./pages/Trending Movies/TrendingMovies";
import { Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/movies-shows" element={<MoviesShows />} />;
        <Route path="/support" element={<Support />} />;
        <Route path="/subscriptions" element={<Subscriptions />} />;
        <Route path="/movie" element={<MoviePage />} />;
        <Route path="/movies-result" element={<MovieList />} />;
        <Route path="/all-movies" element={<AllMovies />} />;
        <Route path="/trending-movies" element={<TrendingMovies />} />;
      </Routes>
    </div>
  );
}
export default App;
