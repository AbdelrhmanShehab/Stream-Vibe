import React from "react";
import "../movie details/movieDet.css";
import "../../assets/responsive.css"
import BannerMovie from "../../components/BannerMovie";
import Header from "../../components/Header";
import film7 from "../../assets/imgs/film3.jpg";
import MovieDesc from "./MovieDesc";

function Moviedet() {
  return (
    <>
      <Header />
      <div className="main-container-home2">
        <BannerMovie
          backgroundMovieBanner={film7}
          titleMovieBanner="Breaking Bad"
          descMovieBanner="Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse."
        />
        <MovieDesc descMovie="Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse." />
      </div>
    </>
  );
}
export default Moviedet;
