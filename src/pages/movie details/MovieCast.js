import React from "react";
import "./movieDet.css";
import "../../assets/responsive.css"
import walter from "../../assets/imgs/walterWhite.jpg";
import jessy from "../../assets/imgs/jessy.jpg";
import hank from "../../assets/imgs/hank.jpg";
import anna from "../../assets/imgs/annaGunn.jpg";
import guss from "../../assets/imgs/gusssFreng.jpg";
import saul from "../../assets/imgs/saul.jpg";
import leftArrow from "../../assets/imgs/left-arrow-icon.svg";
import rightArrow from "../../assets/imgs/right-arrow-icon.svg";
const MovieCast = (castImgs) => {
  return (
    <>
      <div className="movie-details">
        <h3 className="title-box-movie-det">Cast</h3>
       

        <div className="flex-cast">
          <img className="actor-square" src={walter} />
          <img className="actor-square" src={anna} />
          <img className="actor-square" src={jessy} />
          <img className="actor-square" src={saul} />
          <img className="actor-square" src={hank} />
          <img className="actor-square" src={guss} />
          <div className="more-actors">View all</div>
        </div>
      </div>
    </>
  );
};

export default MovieCast;
