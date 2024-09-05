import { React, useState } from "react";
import "./components.css";
import film4 from "../assets/imgs/film4.jpg";
import film12 from "../assets/imgs/film12.jpg";
import film10 from "../assets/imgs/film10.jpg";
import film17 from "../assets/imgs/film17.jpeg";
import rightArrow from "../assets/imgs/right-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import movies from "../Data/MoviesData";

const CardCatigores = ({ title, image, sizeCard, showDiv, classNaame }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const filterCatigory = () => {
    const result = movies.filter(function handleCatigory(movie) {
      return movie.category.includes(title);
    });
    setFilteredMovies(result);
    navigate("/movies-result", { state: { result } });
  };

  return (
    <>
      <button onClick={filterCatigory} className="card-catigores-button">
        <article style={{ width: sizeCard }} className="movies-types-card">
          <figure className="movies-card-content">
            <div className="movies-inside-card">
              <img className="square-film" src={image[0]} />
              <img className="square-film" src={image[1]} />
            </div>
            <div className="movies-inside-card">
              <img className="square-film" src={image[2]} />
              <img className="square-film" src={image[3]} />
            </div>
          </figure>
          <div className="catigory-arrow-flex">
            <div className="flex-trending">
              {showDiv && <div className={classNaame}>Top 10 In</div>}
              <h4 className="catirogries-title">{title}</h4>
            </div>
            <img src={rightArrow} alt="" />
          </div>
          {/* end of card content */}
          <div className="shade-card"></div>
        </article>
      </button>
    </>
  );
};
export default CardCatigores;
