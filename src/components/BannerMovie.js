import React from "react";
import "../pages/Movies/movies.css";
import SquareImg from "./SquareImg";
import plusIconWhite from "../assets/imgs/plusWhite.svg";
import soundIcon from "../assets/imgs/soundIcon.svg";
import likeIcon from "../assets/imgs/likeIcon.svg";
import leftWhite from "../assets/imgs/leftWhite.svg";
import rightWhite from "../assets/imgs/rightWhite.svg";
import MainBtn from "./MainBtn";

const squareData = [
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
const BannerMovie = ({
  backgroundMovieBanner,
  titleMovieBanner,
  descMovieBanner,
}) => {
  return (
    <>
      <figure className="movieBanner">
      <div className="fade-movies-shows"></div>
        <img
          className="background-movie-banner"
          loading="lazy"
          src={backgroundMovieBanner}
          alt="background"
        />

        <figcaption className="title-desc-movie-banner center-tranform">
          <h1>{titleMovieBanner}</h1>
          <p>{descMovieBanner}</p>
        </figcaption>
        <div className="three-icons-banner">
          <MainBtn btnContent="Play Now" showIcon iconSize="18px" />
          {squareData.map((data, index) => (
            <SquareImg
              key={index}
              squareIcon={data.squareIcon}
              squareColor={data.squareColor}
            />
          ))}
        </div>
        <div className="flex-slider-banner-movies">
          <SquareImg squareColor="0F0F0F" squareIcon={leftWhite} />
          <div className="flex">
            <div className="red-page-catigory"></div>
            <div className="gray-page-catigory"></div>
            <div className="gray-page-catigory"></div>
            <div className="gray-page-catigory"></div>
          </div>
          <SquareImg squareColor="0F0F0F" squareIcon={rightWhite} />
        </div>
      </figure>
    </>
  );
};
export default BannerMovie;
