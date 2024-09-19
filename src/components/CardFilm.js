import React from "react";
import "./components.css";
import clockIcon from "../assets/imgs/clockIcon.svg";
import eyeIcon from "../assets/imgs/eyeIcon.svg";
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
}) => {
  return (
    <>
      <article
        style={{ width: widthSizeCard, height: heightSizeCard }}
        className="movies-types-card"
        // onClick={handleClick}
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
              <ReviewStarts filmViews={filmViews} />
            </div>
          )}
        </div>
      </article>
      {" "}
    </>
  );
};
export default CardFilm;
