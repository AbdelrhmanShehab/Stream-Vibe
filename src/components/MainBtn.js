import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const MainBtn = ({ btnContent, showIcon = false, iconSize = "1px" }) => {
  return (
    <button className="main-btn">
      {showIcon && (
        <FontAwesomeIcon
          icon={faPlay}
          className="play-icon"
          style={{
            fontSize: iconSize,
          }}
        />
      )}
      {btnContent}
    </button>
  );
};

export default MainBtn;
