import React, { useState } from "react";
import "./components.css";
import search from "../assets/imgs/search-icon.svg";
import notifi from "../assets/imgs/notifi-icon.svg";

function SearchNotifi() {
  const [isVisibleSearch, setVisibleSearch] = useState(false);
  function popSearchBar() {
    setVisibleSearch(!isVisibleSearch);
  }
  return (
    <>
      {isVisibleSearch && (
        <div className="search-container">
          <div className="fade-for-search"></div>
          <div className="search-box">
            <div className="label-textbox">
              <label class="label-box-search">Search for a movie</label>
              <input
                className="text-box-search"
                type="text"
                placeholder="type here.."
              />
            </div>
          </div>
        </div>
      )}
      <div className="search-notifi-icons">
        <img
          style={{ cursor: "pointer" }}
          onClick={popSearchBar}
          src={search}
          alt="search-icon"
        />
        <img className="notifi-icon-header" src={notifi} alt="search-icon" />
      </div>
    </>
  );
}
export default SearchNotifi;
