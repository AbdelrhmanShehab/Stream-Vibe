import React, { useState } from "react";
import "../pages/Movies/movies.css";
import SquareImg from "./SquareImg";
import film4 from "../assets/imgs/film4.jpg";
import film2 from "../assets/imgs/lost.jpg";
import film7 from "../assets/imgs/film7.jpg";
import film13 from "../assets/imgs/room2.jpg";
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
const sliderData = [
  {
    sliderTitle: "Avengers: Endgame",
    sliderImage: film4,
    sliderDesc:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
  },
  {
    sliderTitle: "Lost",
    sliderImage: film2,
    sliderDesc:
      "The survivors of a plane crash find themselves stranded on a mysterious island. They are forced to work together for their survival when they realise that they are not alone on the island.",
  },
  {
    sliderTitle: "Joker",
    sliderImage: film7,
    sliderDesc:
      "Failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while in Arkham State Hospital. Upon release, the pair embark on a doomed romantic ...",
  },
  {
    sliderTitle: "Room",
    sliderImage: film13,
    sliderDesc:
      "A little boy is held captive in a room with his mother since his birth, so he has never known the world outside.",
  },
];
const BannerMovie = () => {
  const [imageIndex, setImageIndex] = useState(0);

  function nextImage() {
    setImageIndex((prevImage) => {
      return prevImage === sliderData.length - 1 ? 0 : prevImage + 1;
    });
  }

  function lastImage() {
    setImageIndex((prevImage) =>
      prevImage === 0 ? sliderData.length - 1 : prevImage - 1
    );
  }

  return (
    <>
      <figure className="movieBanner">
        <div className="fade-movies-shows"></div>

        <img
          loading="lazy"
          src={sliderData[imageIndex].sliderImage}
          alt="background"
          className="background-movie-banner"
        />

        <figcaption className="title-desc-movie-banner center-tranform">
          <h1>{sliderData[imageIndex].sliderTitle}</h1>
          <p>{sliderData[imageIndex].sliderDesc}</p>
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
          <button
            style={{ background: "none", border: "none" }}
            onClick={lastImage}
          >
            <SquareImg squareIcon={leftWhite} />
          </button>
          <div className="flex">
            {sliderData.map((_, index) => (
              <div
                key={index}
                className={
                  index === imageIndex
                    ? "red-page-catigory"
                    : "gray-page-catigory"
                }
              ></div>
            ))}
          </div>
          <button
            onClick={nextImage}
            style={{ background: "none", border: "none" }}
          >
            <SquareImg squareIcon={rightWhite} />
          </button>
        </div>
      </figure>
    </>
  );
};

export default BannerMovie;
