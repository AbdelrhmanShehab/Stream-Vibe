import React from "react";
import "../movie details/movieDet.css";
import "../../assets/responsive.css";
import Header from "../../components/Header";
import film7 from "../../assets/imgs/film3.jpg";
import MovieDesc from "./MovieDesc";
import MovieCast from "./MovieCast";
import MovieReview from "../../components/MovieReview";
import plusIcon from "../../assets/imgs/plusWhite.svg";
import MovieMoreDets from "./MovieMoreDets";
import FreeTrialBanner from "../../components/FreeTrialBanner";
import Footer from "../../components/Footer";
import MovieBanner from "./MovieBanner";
import { Link, useLocation } from "react-router-dom";

// photos import
import leftArrow from "../../assets/imgs/left-arrow-icon.svg";
import rightArrow from "../../assets/imgs/right-arrow-icon.svg";

function MoviePage() {
  const currentLocation = useLocation();
  const location = useLocation();
  const {
    movieTitle,
    filmImg,
    filmDesc,
    filmDuration,
    filmCat,
    filmReleaseDate,
  } = location.state;
  const reviewCardData = [
    {
      reviewOwner: "Abdelrhman",
      reviewOwnerCountry: "Egypt",
      reviewContent:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
    },
    {
      reviewOwner: "Hossam",
      reviewOwnerCountry: "Egypt",
      reviewContent:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
    },
  ];
  return (
    <>
      <div className="main-container-home2">
      {currentLocation.pathname === "/movie" && <Header />}
        <MovieBanner
          titleMovieBanner={movieTitle}
          backgroundMovieBanner={filmImg}
          descMovieBanner={filmDesc}
        />
        {/* end of movie banner */}
        <div className="flex-movie-dets">
          <div className="movie-det-flex">
            <MovieDesc descMovie={filmDesc} />
            {/* end of movies desc */}
            {/* <MovieCast />  */}
            {/* end of movie cast */}
            <div className="movie-details">
              <div className="btn-review-det">
                <h3 className="title-box-movie-det">Reviews</h3>
                <button className="add-review-btn">
                  <img src={plusIcon} />
                  <p>Add your Review</p>
                </button>
              </div>
              <div className="two-reviews">
                {reviewCardData.map((data, index) => (
                  <MovieReview
                    key={index}
                    reviewOwner={data.reviewOwner}
                    reviewOwnerCountry={data.reviewOwnerCountry}
                    reviewContent={data.reviewContent}
                  />
                ))}
              </div>
              <div className="slider-catigory-movie-page">
                <div className="circle-image">
                  <img src={leftArrow} />
                </div>
                <div className="red-page-catigory"></div>
                <div className="gray-page-catigory"></div>
                <div className="gray-page-catigory"></div>
                <div className="gray-page-catigory"></div>
                <div className="circle-image">
                  <img src={rightArrow} />
                </div>
              </div>
            </div>
            {/* end of movie review */}
          </div>
          <MovieMoreDets />
        </div>
        <FreeTrialBanner />
      </div>
      {/* end of main container home */}
      <Footer />
    </>
  );
}
export default MoviePage;
