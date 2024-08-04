import React from "react";
import "./components.css";
import leftArrow from "../assets/imgs/left-arrow-icon.svg";
import rightArrow from "../assets/imgs/right-arrow-icon.svg";
function SliderCatigores() {
  return (
    <div className="slider-catigory">
      <div className="slider-catigory-home-page">
        <div className="square-img">
          <img src={leftArrow} />
        </div>
        <div className="red-page-catigory"></div>
        <div className="gray-page-catigory"></div>
        <div className="gray-page-catigory"></div>
        <div className="gray-page-catigory"></div>
        <div className="square-img">
          <img src={rightArrow}/>
        </div>
      </div>
    </div>
  );
}
export default SliderCatigores;
