import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../Data/MoviesData";
import searchIcon from "../assets/imgs/search-icon.svg";
import notifiIcon from "../assets/imgs/notifi-icon.svg";
import "./components.css";

function SearchNotifi() {
  const [isVisibleSearch, setVisibleSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  function popSearchBar() {
    setVisibleSearch(!isVisibleSearch);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const performSearch = () => {
    const result = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredMovies(result);
    setVisibleSearch(false);
    navigate("/movies-result", { state: { result } });
  };

  return (
    <>
      {isVisibleSearch && (
        <div className="search-container">
          <div className="fade-for-search"></div>
          <div className="search-box">
            <div className="label-textbox">
              <label className="label-box-search">Search for a movie</label>
              <input
                className="text-box-search"
                type="text"
                placeholder="type here.."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button className="search-btn" onClick={performSearch}>
              Search
            </button>
          </div>
        </div>
      )}
      <div className="search-notifi-icons">
        <img
          style={{ cursor: "pointer" }}
          onClick={popSearchBar}
          src={searchIcon}
          alt="search-icon"
        />
        <img
          className="notifi-icon-header"
          src={notifiIcon}
          alt="notifi-icon"
        />
      </div>
    </>
  );
}

export default SearchNotifi;
