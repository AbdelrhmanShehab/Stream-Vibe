import React from "react";
import "./components.css";
import clockIcon from "../assets/imgs/clockIcon.svg";
const DuirationFilm = ({ classNaame, filmImg, showDiv }) => {
  return (
    <>
      <img className="film-img-card" src={filmImg} />
      {/* <div className="flex-duiration-seasion"> */}
      {showDiv && (
        <div className={classNaame}>
          <img src={clockIcon} />
          <p>1h 30min</p>
        </div>
      )}
      {/* </div> */}
    </>
  );
};
export default DuirationFilm;
