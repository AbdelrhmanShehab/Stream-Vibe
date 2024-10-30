import React, { useState } from "react";
import "../pages/Movies/movies.css";
import SquareImg from "./SquareImg";
import trendGodFather from "../assets/imgs/trendGodfather.jpg";
import trendBladeRunner from "../assets/imgs/trendBladeRunner.jpg";
import trendLionKing from "../assets/imgs/trendLionKing.jpg";
import trendAvatar from "../assets/imgs/trendAvatar.jpg";
import plusIconWhite from "../assets/imgs/plusWhite.svg";
import soundIcon from "../assets/imgs/soundIcon.svg";
import likeIcon from "../assets/imgs/likeIcon.svg";
import leftWhite from "../assets/imgs/leftWhite.svg";
import rightWhite from "../assets/imgs/rightWhite.svg";
import MainBtn from "./MainBtn";
import { useNavigate } from "react-router-dom";

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
    movieTitle: "The God Father",
    filmImg: trendGodFather,
    filmDesc:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    filmDuration: "2h 23m",
    filmCat: "Action",
    filmReleaseDate: "2019",
  },
  {
    movieTitle: "Blade Runner 2049",
    filmImg: trendBladeRunner,
    filmDesc:
      "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    filmDuration: "2h 23m",
    filmCat: "Sci-fi",
    filmReleaseDate: "2017",
  },
  {
    movieTitle: "Avatar",
    filmImg: trendAvatar,
    filmDesc:
      "Failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while in Arkham State Hospital. Upon release, the pair embark on a doomed romantic ...",
    filmDuration: "2h 23m",
    filmCat: "Action",
    filmReleaseDate: "2019",
  },
  {
    movieTitle: "The Lion King",
    filmImg: trendLionKing,
    filmDesc:
      "A young lion prince flees his kingdom after the murder of his father, only to learn the true meaning of responsibility and bravery.",
    filmDuration: "2h 23m",
    filmCat: "Action",
    filmReleaseDate: "2019",
  },
];

const BannerMovie = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

  const transferMoviesData = () => {
    const {
      movieTitle,
      filmImg,
      filmDesc,
      filmDuration,
      filmCat,
      filmReleaseDate,
    } = sliderData[imageIndex];
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

  // Move to the next image in the slider
  function nextImage() {
    setImageIndex((prevImage) =>
      prevImage === sliderData.length - 1 ? 0 : prevImage + 1
    );
  }

  // Move to the previous image in the slider
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
          src={sliderData[imageIndex].filmImg}
          alt="background"
          className="background-movie-banner"
        />

        <figcaption className="title-desc-movie-banner center-tranform">
          <h1>{sliderData[imageIndex].movieTitle}</h1>
          <p>{sliderData[imageIndex].filmDesc}</p>
        </figcaption>

        <div className="three-icons-banner">
          <div onClick={transferMoviesData}>
            <MainBtn btnContent="Play Now" showIcon iconSize="18px" />
          </div>

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
