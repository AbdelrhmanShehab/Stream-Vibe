import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResultCardMovie from "./ResultCardMovie.js";
import "./movie-list.css";
import FreeTrialBanner from "../../components/FreeTrialBanner";
import LazyLoad from "react-lazyload";
import { useLocation } from "react-router-dom";

const MovieList = () => {
  const currentLocation = useLocation();
  const { result } = currentLocation.state || { result: [] }; // Get the result from state
  
  return (
    <>
      {currentLocation.pathname === "/movies-result" && <Header />}
      <div className="main-container-home2">
        <h1 className="movies-result-head">Movies</h1>
        {/* All movies content */}
        <div className="movies-list-content">
          {result.length > 0 ? (
            result.map((movie) => (
              <LazyLoad key={movie.id} height={200} offset={100} once>
                <ResultCardMovie
                  movieTitle={movie.title}
                  filmImg={movie.image}
                  filmDuration={movie.duration}
                  filmCat={movie.category}
                  filmReleaseDate={movie.releaseDate}
                />
              </LazyLoad>
            ))
          ) : (
            <p className="no-movies">No movies found :/</p>
          )}
        </div>
        {/* End movies content */}
      </div>
      <Footer />
    </>
  );
};

export default MovieList;
