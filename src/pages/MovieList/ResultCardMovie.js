import React from "react";
import clockIcon from "../../assets/imgs/clockIcon.svg";
import { useNavigate } from "react-router-dom";

const ResaultCardMovie = ({
  movieTitle,
  filmImg,
  filmDesc,
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
  const shortendTitle = handleLongTitle(movieTitle);

  return (
    <article className="movies-card-result" onClick={handleClick}>
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
