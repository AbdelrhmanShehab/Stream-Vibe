import { React, useState } from "react";
import "./movieDet.css";
import MainBtn from "../../components/MainBtn";
import SquareImg from "../../components/SquareImg";
import plusIconWhite from "../../assets/imgs/plusWhite.svg";
import soundIcon from "../../assets/imgs/soundIcon.svg";
import likeIcon from "../../assets/imgs/likeIcon.svg";
import { useNavigate,useLocation } from "react-router-dom";

const squareDataMovie = [
  {
    squareIcon: plusIconWhite,
    squareColor: "#0F0F0F",
  },
  {
    squareIcon: likeIcon,
    squareColor: "#0F0F0F",
  },
  {
    squareIcon: soundIcon,
    squareColor: "#0F0F0F",
  },
];
const MovieBanner = ({
  backgroundMovieBanner,
  titleMovieBanner,
  descMovieBanner,
}) => {
  const location = useLocation();
 
  return (
    <>
      <figure className="movieBanner">
        <div className="fade-movies-shows"></div>

        <img
          loading="lazy"
          src={backgroundMovieBanner}
          alt="background"
          className="background-movie-banner"
        />

        <figcaption className="title-desc-movie-banner center-tranform">
          <h1>{titleMovieBanner}</h1>
          <p>{descMovieBanner}</p>
        </figcaption>
        <div className="three-icons-banner">
          <MainBtn btnContent="Play Now" showIcon iconSize="18px" />
          {squareDataMovie.map((data, index) => (
            <SquareImg
              key={index}
              squareIcon={data.squareIcon}
              squareColor={data.squareColor}
            />
          ))}
        </div>
      </figure>
    </>
  );
};
export default MovieBanner;
