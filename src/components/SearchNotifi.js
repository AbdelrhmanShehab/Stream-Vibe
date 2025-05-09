import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../Data/MoviesData";
import searchIcon from "../assets/imgs/search-icon.svg";
import notifiIcon from "../assets/imgs/notifi-icon.svg";
import accountIcon from "../assets/imgs/accountIcon.svg";
import { Link, useLocation } from "react-router-dom";
import "./components.css";
import { useSelector } from "react-redux";

function SearchNotifi() {
  const [isVisibleSearch, setVisibleSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setVisibleSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <>
      {isVisibleSearch && (
        <div className="search-container">
          <div className="fade-for-search"></div>
          <div className="search-box" ref={searchRef}>
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
        <div className="header-account">
          {user ? (
            <Link to="/profile" className="account-link">
              <div className="account-icon-header">
                <p>{user.displayName}</p>
                <img
                  className="account-icon"
                  src={accountIcon}
                  alt="account icon"
                />
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <button className="login-btn-header"> Login</button>
            </Link>
          )}
        </div>
        )}
      </div>
    </>
  );
}

export default SearchNotifi;
