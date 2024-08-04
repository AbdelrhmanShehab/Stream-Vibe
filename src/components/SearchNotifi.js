import React from "react";
import "./components.css";
import search from "../assets/imgs/search-icon.svg";
import notifi from "../assets/imgs/notifi-icon.svg";

function SearchNotifi() {
  return (
    <div className="search-notifi-icons">
      <img src={search} alt="search-icon" />
      <img className="notifi-icon-header" src={notifi} alt="search-icon" />
    </div>
  );
}
export default SearchNotifi;
