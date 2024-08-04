import React from "react";
import "../components/components.css";
import starIcon from "../assets/imgs/starIcon.svg";

const ReviewStarts = ({ filmViews }) => {
  return (
    <>
      <div className="flex">
        <img src={starIcon} />
        <img src={starIcon} />
        <img src={starIcon} />
        <img src={starIcon} />
        <img src={starIcon} />
        <p style={{ paddingLeft: "3px" }}>{filmViews}</p>
      </div>
    </>
  );
};
export default ReviewStarts;
