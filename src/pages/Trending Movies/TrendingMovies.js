import React, { useState, useEffect } from "react";
import "./trendingMovies.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FreeTrialBanner from "../../components/FreeTrialBanner";
import { trendingMovies } from "../../Data/MoviesData";
import SliderCatigores from "./SliderTrend";
import ResultCardMovie from "../../pages/MovieList/ResultCardMovie";
import movies from "../../Data/MoviesData";
import LazyLoad from "react-lazyload";
import { Link, useLocation } from "react-router-dom";

function TrendingMovies() {
  const [highestZIndex, setHighestZIndex] = useState(0); // Set the first card to be in front by default
  const [activeCardIndex, setActiveCardIndex] = useState(0); // Default to the first card
  const currentLocation = useLocation();
  const location = useLocation();
  const { title } = location.state;
  const [selectedCategory, setSelectedCategory] = useState(title);
  const bringToFront = (index) => {
    setHighestZIndex(index);
  };

  const handleClick = (index) => {
    setActiveCardIndex(index);
  };

  return (
    <>
      <main className="main-container-trending">
        <Header />
        <div className="dropdown-trending">
          <ul className="dropdown-content-trending">
            <li>
              <a className="menu">
                <h2 className="menu-title">Choose Category</h2>
                <ul className="menu-dropdown">
                  <li onClick={() => setSelectedCategory("Action")}>Action</li>
                  <li onClick={() => setSelectedCategory("Drama")}>Drama</li>
                  <li onClick={() => setSelectedCategory("Sci-fi")}>Sci-fi</li>
                  <li onClick={() => setSelectedCategory("Horror")}>Horror</li>
                  <li onClick={() => setSelectedCategory("Adventure")}>
                    Adventure
                  </li>
                </ul>
              </a>
            </li>
          </ul>
        </div>
        <h1 className="top-ten-title">
          Top 10 in <span>{selectedCategory}</span>
        </h1>
        <div className="all-div-trend-class">
          {trendingMovies
            .filter((movie) => movie.category === selectedCategory)
            .map((data, index) => {
              const zIndex =
                highestZIndex === index
                  ? trendingMovies.length
                  : trendingMovies.length - index;

              return (
                <div
                  onClick={() => bringToFront(index)}
                  key={index}
                  className="div-contain-trend-slider"
                  style={{
                    zIndex: zIndex,
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    width: highestZIndex === index ? "85%" : "4%",
                  }}
                >
                  <SliderCatigores
                    filmImg={data.image}
                    movieTitle={data.title}
                    trendOrder={data.order}
                    filmDesc={data.description}
                    filmReleaseDate={data.releaseDate}
                    filmCat={data.category}
                    filmDuration={data.duration}
                    isClicked={activeCardIndex === index} // Handle click logic
                    handleClick={() => handleClick(index)}
                  />
                </div>
              );
            })}
        </div>
        <h1 className="catigory-all-movies-title">
          All Movies In <span className="">{selectedCategory}</span>
        </h1>
        <div className="movies-list-content">
          {movies
            .filter((movie) => movie.category === selectedCategory)
            .map((movie) => (
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
        <FreeTrialBanner />
      </main>
      <Footer />
    </>
  );
}

export default TrendingMovies;
