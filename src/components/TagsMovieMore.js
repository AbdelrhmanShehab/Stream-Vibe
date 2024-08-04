import React from "react";
import "./components.css";

const TagsMovieMore = ({ tagContent }) => {
  return (
    <div className="tag-box">
      <p className="tag-box-text">{tagContent}</p>
    </div>
  );
};
export default TagsMovieMore;
