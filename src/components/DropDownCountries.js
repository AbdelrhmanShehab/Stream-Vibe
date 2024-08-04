import React from "react";
import "./components.css";
import egyptFlag from "../assets/imgs/egyptIcon.svg";
import dropdownIcon from "../assets/imgs/dropdownIcon.svg";

const DropDownCountries = () => {
  return (
    <div class="dropdown-countries-code">
      <img src={egyptFlag} />
      <img src={dropdownIcon} />
    </div>
  );
};

export default DropDownCountries;
