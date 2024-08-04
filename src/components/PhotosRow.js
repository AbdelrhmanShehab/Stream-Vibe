import React from "react";
import PhotoBanner from "./PhotoBanner";


const PhotosRow = ({ photos }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {photos.map((data, index) => (
        <PhotoBanner key={index} src={data.bannerPhoto} />
      ))}
    </div>
  );
};

export default PhotosRow;
