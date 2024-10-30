import {React,useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import movies from "../../Data/MoviesData.js";
import ResultCardMovie from "../MovieList/ResultCardMovie.js";
import "../MovieList/movie-list.css";
import FreeTrialBanner from "../../components/FreeTrialBanner";
import LazyLoad from "react-lazyload";
import { useLocation } from "react-router-dom";

const AllMovies = () => {
  const currentLocation = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {currentLocation.pathname === "/all-movies" && <Header />}
      <div className="main-container-home2">
        <h1 className="movies-result-head">Movies</h1>
        {/* All movies content */}
        <div className="movies-list-content">
          {movies.map((movie) => (
            <LazyLoad key={movie.id} height={200} offset={100} once>
              <ResultCardMovie
                movieTitle={movie.title}
                filmImg={movie.image}
                filmDesc={movie.description}
                filmDuration={movie.duration}
                filmCat={movie.category}
                filmReleaseDate={movie.releaseDate}
              />
            </LazyLoad>
          ))}
        </div>
        {/* End movies content */}
        <FreeTrialBanner />
      </div>
      <Footer />
    </>
  );
};

export default AllMovies;
