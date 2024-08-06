import React from "react";

const PhotoBanner = ({ bannerPhoto }) => {
  return (
    <img
      loading="lazy"
      src={bannerPhoto}
      style={{ width: "140px", height: "80px", margin: "7px" }}
    />
  );
};

export default PhotoBanner;