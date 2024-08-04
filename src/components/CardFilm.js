import React from "react";
import "./components.css";
import clockIcon from "../assets/imgs/clockIcon.svg";
import seasonsIcon from "../assets/imgs/seasonsIcon.svg";
import eyeIcon from "../assets/imgs/eyeIcon.svg";
import starIcon from "../assets/imgs/starIcon.svg";
import ReviewStarts from "./ReviewStarts";
const CardFilm = ({
  widthSizeCard,
  heightSizeCard,
  classNameDuiration,
  classNameSeasons,
  classNameRelease,
  classNameRating,
  releaseDate,
  filmImg,
  showDiv,
  filmDuiration,
  filmViews,
  filmReleaseDate,
  filmRating,
}) => {
  return (
    <>
      <article
        style={{ width: widthSizeCard, height: heightSizeCard }}
        className="movies-types-card"
      >
        <img className="film-img-card" src={filmImg} />
        <div className="flex-duiration-seasion">
          {showDiv && (
            <div className={classNameDuiration}>
              <img src={clockIcon} />
              <p>{filmDuiration}</p>
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
              <p>Released at {releaseDate}</p>
            </div>
          )}
          {showDiv && (
            <div className={classNameRating}>
              <ReviewStarts filmViews={filmViews}/>
            </div>
          )}
        </div>
      </article>
    </>
  );
};
export default CardFilm;
