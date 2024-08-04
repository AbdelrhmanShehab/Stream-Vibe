import React from "react";
import "./movieDet.css";
import "../../assets/responsive.css"
const MovieDesc = ({ descMovie }) => {
  return (
    <>
      <div className="movie-details">
        <h3 className="title-box-movie-det">Description</h3>
        <p style={{ color: "white", fontSize: "15px" }}>{descMovie}</p>
      </div>
    </>
  );
};
export default MovieDesc;
