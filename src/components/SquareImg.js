import React from "react";
const SquareImg = ({ squareIcon, squareColor, onClick }) => {
  return (
    <div className="square-img" style={{ squareColor }} onClick={onClick}>
      <img className="icon-in-square" src={squareIcon} />
    </div>
  );
};
export default SquareImg;
