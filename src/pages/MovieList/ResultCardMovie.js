import React from "react";
import clockIcon from "../../assets/imgs/clockIcon.svg";

const ResaultCardMovie = ({
  movieTitle,
  filmImg,
  filmDuration,
  filmCat,
  filmReleaseDate,
}) => {
  const handleLongTitle = (movieTitle) => {
    let longTitle;
    if (movieTitle.length > 24) {
      longTitle = movieTitle.slice(0, 21) + "...";
    } else {
      longTitle = movieTitle;
    }
    return longTitle;
  };

  const shortendTitle = handleLongTitle(movieTitle);

  return (
    <article className="movies-card-result">
      <img className="film-img-card" src={filmImg} alt={movieTitle} />
      <div className="flex-duiration-seasion">
        <div className="duiration-one-film flex">
          <img src={clockIcon} alt="Clock Icon" />
          <p style={{ fontSize: "1.3rem", color: "gray" }}>{filmDuration}</p>
        </div>
      </div>
      <div className="film-title-cat-result">
        <h2 className="film-title-result" data-full-title={movieTitle}>
          {shortendTitle}
        </h2>
        <p>
          {filmCat} <span>.</span> {filmReleaseDate}
        </p>
      </div>
    </article>
  );
};

export default ResaultCardMovie;
