import React from "react";
import clockIcon from "../../assets/imgs/clockIcon.svg";
import film4 from "../../assets/imgs/film4.jpg";
const ResaultCardMovie = ({
  movieTitle,
  filmImg,
  releaseDate,
  filmDuiration,
  filmViews,
  filmReleaseDate,
}) => {
  return (
    <>
      <article className="movies-types-card">
        <img className="film-img-card" src={film4} />
        <div className="flex-duiration-seasion">
          <div >
            <img src={clockIcon} />
            <p>2h 30mins</p>
          </div>
        </div>
      </article>
    </>
  );
};
export default ResaultCardMovie;
