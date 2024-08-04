import React from "react";
import "./home.css";
import "../../assets/responsive.css"
const DevicesCard = ({ deviceImage, deviceTitle, deviceDesc }) => {
  return (
    <article className="card-various">
      <div className="device-type-title-flex">
        <div className="device-type">
          <img className="imgDevice" src={deviceImage} alt="" />
        </div>
        <h2 className="title-device-type">{deviceTitle}</h2>
      </div>
      <h3 className="desc-various">{deviceDesc}</h3>
      <div className="shade-box-various"></div>
      <div className="gradient-box"></div>
    </article>
  );
};
export default DevicesCard;
