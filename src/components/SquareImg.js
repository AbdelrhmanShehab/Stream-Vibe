import React from "react";
const SquareImg = ({squareIcon, squareColor}) => {
  return (
    <div className="square-img" style={{ squareColor }}>
      <img className="icon-in-square" src={squareIcon} />
    </div>
  );
};
export default SquareImg;
