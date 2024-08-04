import "./support.css";
import React from "react";

const SupportBannerPhoto = ({ supportBannerPhoto }) => {
  return (
    <img
      loading="lazy"
      src={supportBannerPhoto}
      style={{ width: "110px", height: "135px", margin: "7px", borderRadius:"8px"}}
    />
  );
};

export default SupportBannerPhoto;
