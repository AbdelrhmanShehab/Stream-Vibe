import React from "react";
import "./components.css";
import ReviewStarts from "./ReviewStarts";
import plusIcon from "../assets/imgs/plusWhite.svg";
import starIcon from "../assets/imgs/starIcon.svg";

const MovieReview = ({ reviewOwner, reviewOwnerCountry, reviewContent }) => {
  return (
    <article className="movie-review-box">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginBottom: "20px" }}>
          <h2 className="movie-review-box-h2">{reviewOwner}</h2>
          <h3 className="movie-review-box-h3">From {reviewOwnerCountry}</h3>
        </div>
        <div className="rating-movie-page">
          <ReviewStarts filmViews="19k" />
        </div>
      </div>
      <p className="movie-review-desc">{reviewContent}</p>
    </article>
  );
};
export default MovieReview;
