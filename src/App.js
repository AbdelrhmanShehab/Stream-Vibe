import React, { useEffect } from "react";
import "./assets/App.css";
import Home from "./pages/Home/Home";
import MoviesShows from "./pages/Movies/MoviesShows";
import Support from "./pages/Support/Support";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import MoviePage from "./pages/movie details/MoviePage";
import MovieList from "./pages/MovieList/MovieList";
import AllMovies from "./pages/AllMovies/AllMovies";
import TrendingMovies from "./pages/Trending Movies/TrendingMovies";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/userProfile/Profile";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginUser } from "./redux/userSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(loginUser(storedUser));
    }
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies-shows" element={<MoviesShows />} />
      <Route path="/support" element={<Support />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/movies-result" element={<MovieList />} />
      <Route path="/all-movies" element={<AllMovies />} />
      <Route path="/trending-movies" element={<TrendingMovies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
