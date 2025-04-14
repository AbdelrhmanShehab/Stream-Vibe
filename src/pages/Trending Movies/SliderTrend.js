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
    <div
      className={`flim-trend-banner ${isClicked ? "selected" : ""}`}
      onClick={handleClick}
    >
      <div
        className="div-for-small-screen-click"
        // onClick={openMovieClick}
      ></div>

      {isClicked && (
        <div className="slider-trend-content">
          {/* Show order number only on larger screens */}
          {windowWidth > 776 && (
            <p className="trend-slider-order">{trendOrder}</p>
          )}

          {/* Always show the watch now button */}
          <div className="title-wacth-trend-slider">
            {windowWidth > 776 && (
              <p className="trend-slider-title">{movieTitle}</p>
            )}
            <p
              className="trend-slider-watch-now"
              onClick={openMovieClick}
              style={{
                position: windowWidth <= 776 ? "absolute" : "relative",
                bottom: windowWidth <= 776 ? "10px" : "auto",
                left: windowWidth <= 776 ? "10px" : "auto",
                zIndex: 1000,
              }}
            >
              Watch now
            </p>
          </div>
        </div>
      )}

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
          width: isClicked ? (windowWidth > 776 ? "74%" : "100%") : "100%",
          objectFit: isClicked ? "fill" : "cover",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
};

export default SliderCatigores;
