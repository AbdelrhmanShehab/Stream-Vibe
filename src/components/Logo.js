import React from "react";
import logo from "../assets/imgs/Logo.svg";
import "../assets/responsive.css";

function Logo({ onBurgerClick, isClicked }) {
  return (
    <div className="logo-burger">
      <div className="burger-frame" onClick={onBurgerClick}>
        <div className={`burger-menu ${isClicked? "clicked" :""}`}>
          <div className="line-burger"></div>
          <div className="line-burger2"></div>
          <div className="line-burger3"></div>
        </div>
      </div>
      <img className="logo-header" loading="lazy" src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
