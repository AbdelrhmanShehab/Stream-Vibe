import React from "react";
import "./assets/App.css";
import Home from "./pages/Home/Home";
import MoviesShows from "./pages/Movies/MoviesShows";
import Support from "./pages/Support/Support";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import MoviePage from "./pages/movie details/MoviePage";
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
      </Routes>
    </div>
  );
}
export default App;
