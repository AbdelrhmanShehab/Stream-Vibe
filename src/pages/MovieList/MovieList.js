import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResaultCardMovie from "./ResultCardMovie";
import "./movie-list.css";
import FreeTrialBanner from "../../components/FreeTrialBanner";
function MovieList() {
  return (
    <>
      <Header />
      <div className="main-container-home2">
        <h1 className="movies-result-head">Action Movies</h1>
        <ResaultCardMovie  />
      </div>
      <FreeTrialBanner />
      <Footer />
    </>
  );
}
export default MovieList;
