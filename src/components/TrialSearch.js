import { useState, React } from "react";
import MovieList from "../pages/MovieList/MovieList";
import movies from "../Data/MoviesData";
import searchIcon from "../assets/imgs/search-icon.svg";
import notifiIcon from "../assets/imgs/notifi-icon.svg";

function TrialSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [isSearchVisible, setIsSearchVisible] = useState(true);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter movies based on the search term
  const performSearch = () => {
    const result = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(result);
    setIsSearchVisible(false); // Hide the search container after search
  };

  return (
    <>
      {isSearchVisible && (
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

      <MovieList result={filteredMovies} />
    </>
  );
}

export default TrialSearch;
