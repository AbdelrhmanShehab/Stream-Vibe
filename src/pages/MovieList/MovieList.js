import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResultCardMovie from "./ResultCardMovie.js";
import "./movie-list.css";
import { useLocation } from "react-router-dom";

const MovieList = () => {
  const currentLocation = useLocation();
  const { result } = currentLocation.state || { result: [] };

  // Check if `result` has at least 5 items and that `category` is defined
  const movieCategory =
    result.length > 4 && result[1]?.category && result[1].category === result[4]?.category 
      ? result[4].category
      : "Various";

  return (
    <>
      {currentLocation.pathname === "/movies-result" && <Header />}
      <div className="main-container-home2">
        <h1 className="movies-result-head">{movieCategory} Movies</h1>
        <div className="movies-list-content">
          {result.length > 0 ? (
            result.map((movie, index) => (
              <ResultCardMovie
                key={index}
                movieTitle={movie.title}
                filmImg={movie.image}
                filmDesc={movie.description}
                filmDuration={movie.duration}
                filmCat={movie.category || "Unknown"}
                filmReleaseDate={movie.releaseDate}
              />
            ))
          ) : (
            <p className="no-movies">No movies found :/</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieList;
