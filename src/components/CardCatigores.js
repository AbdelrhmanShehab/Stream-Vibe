import React, { useState } from "react";
import "./components.css";
import { useNavigate } from "react-router-dom";
import movies from "../Data/MoviesData";
import arrow from "../assets/imgs/right-arrow-icon.svg";

const CardCatigores = ({ title, image, sizeCard, showDiv, classNaame }) => {
  const navigate = useNavigate();

  const filterCatigory = () => {
    navigate("/trending-movies", {
      state: {
        title,
      },
    });
    window.scrollTo(0, 0);
  };

  return (
    <article
      onClick={filterCatigory}
      style={{ width: sizeCard }}
      className="movies-types-card"
    >
      {/* Card content and styling */}
      <figure className="movies-card-content">
        <div className="movies-inside-card">
          <img className="square-film" src={image[0]} alt="film image 1" />
          <img className="square-film" src={image[1]} alt="film image 2" />
        </div>
        <div className="movies-inside-card">
          <img className="square-film" src={image[2]} alt="film image 3" />
          <img className="square-film" src={image[3]} alt="film image 4" />
        </div>
      </figure>
      <div className="catigory-arrow-flex">
        <div className="flex-trending">
          {showDiv && <div className={classNaame}>Top 10 In</div>}
          <h4 className="catirogries-title">{title}</h4>
        </div>
        <img src={arrow} alt="arrow icon" />
      </div>
    </article>
  );
};

export default CardCatigores;
