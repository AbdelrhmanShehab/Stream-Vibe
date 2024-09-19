import React from "react";
import "./movieDet.css";
import "../../assets/responsive.css";
import { useLocation } from "react-router-dom";

const MovieDesc = () => {
  const location = useLocation();
  const { filmDesc } = location.state;
  return (
    <>
      <div className="movie-details">
        <h3 className="title-box-movie-det">Description</h3>
        <p style={{ color: "white", fontSize: "15px" }}>{filmDesc}</p>
      </div>
    </>
  );
};
export default MovieDesc;
