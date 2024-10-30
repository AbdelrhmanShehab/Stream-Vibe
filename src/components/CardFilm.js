import React from "react";
import "./components.css";
import clockIcon from "../assets/imgs/clockIcon.svg";
import eyeIcon from "../assets/imgs/eyeIcon.svg";
import ReviewStarts from "./ReviewStarts";
import { useNavigate } from "react-router-dom";

const CardFilm = ({
  widthSizeCard,
  heightSizeCard,
  classNameDuiration,
  classNameSeasons,
  classNameRelease,
  classNameRating,
  showDiv,
  movieTitle,
  filmImg,
  filmViews,
  filmDesc,
  filmDuration,
  filmCat,
  filmReleaseDate,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/movie", {
      state: {
        movieTitle,
        filmImg,
        filmDesc,
        filmDuration,
        filmCat,
        filmReleaseDate,
      },
    });
    window.scrollTo(0, 0);
  };
  return (
    <>
      <article
        style={{ width: widthSizeCard, height: heightSizeCard }}
        className="movies-types-card"
        onClick={handleClick}
      >
        <img className="film-img-card" src={filmImg} />
        <div className="flex-duiration-seasion">
          {showDiv && (
            <div className={classNameDuiration}>
              <img src={clockIcon} />
              <p>{filmDuration}</p>
            </div>
          )}
          {showDiv && (
            <div className={classNameSeasons}>
              <img src={eyeIcon} />
              <p>{filmViews}</p>
            </div>
          )}
          {showDiv && (
            <div className={classNameRelease}>
              <p>Released at {filmReleaseDate}</p>
            </div>
          )}
          {showDiv && (
            <div className={classNameRating}>
              <ReviewStarts filmViews={filmViews} />
            </div>
          )}
        </div>
      </article>{" "}
    </>
  );
};
export default CardFilm;
