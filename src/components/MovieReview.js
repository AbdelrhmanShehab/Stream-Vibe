import React from "react";
import "./components.css";
import ReviewStarts from "./ReviewStarts";

const MovieReview = ({ reviewOwner, reviewOwnerCountry, reviewContent }) => {
  return (
    <article className="movie-review-box">
      <div className="stars-reviewName" style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="name-country-review" style={{ marginBottom: "20px" }}>
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
