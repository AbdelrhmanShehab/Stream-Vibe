import React, { useState, useEffect } from "react";
import "./trendingMovies.css";
import { useNavigate } from "react-router-dom";
const SliderCatigores = ({
  filmImg,
  movieTitle,
  trendOrder,
  filmDesc,
  filmReleaseDate,
  filmDuration,
  filmCat,
  isClicked,
  handleClick,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate();

  const openMovieClick = () => {
    navigate("/movie", {
      state: {
        movieTitle,
        filmImg,
        filmDesc,
        filmCat,
        filmDuration,
        filmReleaseDate,
      },
    });
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div
        className={`flim-trend-banner ${isClicked ? "selected" : ""}`}
        onClick={handleClick}
      >
        <div
          className="div-for-small-screen-click"
          onClick={openMovieClick}
        ></div>
        <div
          className="slider-trend-content"
          style={{ display: isClicked && windowWidth > 776 ? "flex" : "none" }}
        >
          <p className="trend-slider-order">{trendOrder}</p>
          <div className="title-wacth-trend-slider">
            <p className="trend-slider-title">{movieTitle}</p>
            <p className="trend-slider-watch-now" onClick={openMovieClick}>
              Watch now
            </p>
          </div>
        </div>
        <p
          className="right-corner-trend-order"
          style={{ display: isClicked ? "none" : "block" }}
        >
          {trendOrder}
        </p>
        <div
          className="shadow-on-image-trending"
          style={{ display: isClicked ? "none" : "block" }}
        ></div>
        <img
          src={filmImg}
          loading="lazy"
          className="image-banner-trending"
          style={{
            width: isClicked ? "72%" : "100%",
            width: windowWidth > 776 && isClicked ? "74%" : "100%",
            objectFit: isClicked ? "fill" : "cover",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </>
  );
};

export default SliderCatigores;
