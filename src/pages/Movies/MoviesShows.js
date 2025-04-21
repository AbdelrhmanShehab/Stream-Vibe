import React from "react";
import Header from "../../components/Header";
import BannerMovie from "../../components/BannerMovie";
import HeaderDesc from "../../components/HeaderDesc";
import SliderCatigores from "../../components/SliderCatigories";
import CardCatigores from "../../components/CardCatigores";
import CardFilm from "../../components/CardFilm";
import FreeTrialBanner from "../../components/FreeTrialBanner";
import Footer from "../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import movies from "../../Data/MoviesData";
// import images
import film1 from "../../assets/imgs/film1.jpg";
import film2 from "../../assets/imgs/lost.jpg";
import film3 from "../../assets/imgs/film3.jpg";
import film4 from "../../assets/imgs/film4.jpg";
import film5 from "../../assets/imgs/film5.jpg";
import film6 from "../../assets/imgs/film6.jpg";
import film7 from "../../assets/imgs/film7.jpg";
import film8 from "../../assets/imgs/film8.jpg";
import film10 from "../../assets/imgs/film10.jpg";
import film12 from "../../assets/imgs/film12.jpg";
import film13 from "../../assets/imgs/film13.png";
import film14 from "../../assets/imgs/film14.jpg";
import film17 from "../../assets/imgs/film17.jpeg";
import adv1 from "../../assets/imgs/adv1.jpg";
import adv2 from "../../assets/imgs/adv2.jpg";
import adv3 from "../../assets/imgs/adv3.jpg";
import adv4 from "../../assets/imgs/adv4.webp";
import sifi1 from "../../assets/imgs/sifi1.jpg";
import sifi2 from "../../assets/imgs/sifi2.jpg";
import sifi3 from "../../assets/imgs/sifi3.jpg";
import horror1 from "../../assets/imgs/horror1.jpg";
import horror2 from "../../assets/imgs/horror2.jpeg";
import horror3 from "../../assets/imgs/horror3.jpg";
import horror4 from "../../assets/imgs/horror4.jpg";

const MoviesShows = (
  movieTitle,
  filmImg,
  filmDesc,
  filmDuration,
  filmCat,
  filmReleaseDate
) => {
  const cardCatigoresData = [
    {
      title: "Action",
      image: [film4, film12, film10, film17],
      sizeCard: "235px",
    },
    {
      title: "Adventure",
      image: [adv1, adv2, adv3, adv4],
      sizeCard: "235px",
    },
    {
      title: "Sci-fi",
      image: [sifi1, sifi2, sifi3, film6],
      sizeCard: "235px",
    },
    {
      title: "Drama",
      image: [film14, film13, film3, film5],
      sizeCard: "235px",
    },
    {
      title: "Horror",
      sizeCard: "235px",
      image: [horror1, horror2, horror3, horror4],
    },
  ];
  const popularCardCatigoresData = [
    {
      title: "Action",
      image: [film4, film12, film10, film17],
      sizeCard: "235px",
    },
    {
      title: "Adventure",
      image: [adv1, adv2, adv3, adv4],
      sizeCard: "235px",
    },
    {
      title: "Sci-fi",
      image: [sifi1, sifi2, sifi3, film6],
      sizeCard: "235px",
    },
    {
      title: "Drama",
      image: [film14, film13, film3, film5],
      sizeCard: "235px",
    },
    {
      title: "Horror",
      image: [film4, film12, film10, film17],
      sizeCard: "235px",
    },
  ];
  // film card data
  const trendingFilmsCardData = [
    {
      widthSizeCard: "230px",
      heightSizeCard: "300px",
      filmImg: sifi1,
      movieTitle: "Life",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmCat: "Si-fi",
      filmDesc:
        "As astronauts discover the first evidence of extra-terrestrial life on Mars, they begin realising that the life form is extremely intelligent and hostile.",
      filmReleaseDate: "2018",
    },
    {
      widthSizeCard: "230px",
      heightSizeCard: "300px",
      filmImg: adv2,
      filmCat: "Adventure",
      movieTitle: "Jumanji: Welcome to the Jungle",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
      filmReleaseDate: "2017",
    },
    {
      widthSizeCard: "230px",
      heightSizeCard: "300px",
      filmImg: adv1,
      filmCat: "Adventure",
      movieTitle: "Jungle Cruise",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "Based on Disneyland's theme park ride, where a small riverboat takes a group of travelers through a jungle filled with dangerous animals.",
      filmReleaseDate: "2017",
    },
    {
      widthSizeCard: "230px",
      heightSizeCard: "300px",
      filmImg: film8,
      movieTitle: "The Truman Show",
      filmCat: "Adventure",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "An insurance salesman discovers his whole life is actually a reality TV show.",
      filmReleaseDate: "1998",
    },
    {
      widthSizeCard: "230px",
      heightSizeCard: "300px",
      filmImg: film5,
      movieTitle: "Jungle Cruise",
      filmCat: "Adventure",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "Colter Stevens, an army officer who is hired for a secret operation, finds himself in the body of a stranger. Soon, he is on a mysterious trail to track down the bomber of a commuter train in Chicago.",
      filmReleaseDate: "2011",
    },
  ];
  const releaseFilmCardData = [
    {
      widthSizeCard: "230px",
      heightSizeCard: "300px",
      filmImg: film6,
      filmReleaseDate: "15 March 2014",
      movieTitle: "Interstellar",
      filmCat: "Si-fi",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      widthSizeCard: "230px",
      heightSizeCard: "300px",
      filmImg: sifi2,
      filmReleaseDate: "07 April 1999",
      movieTitle: "The Matrix",
      filmCat: "Si-fi",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    },
    {
      widthSizeCard: "230px",
      heightSizeCard: "300px",
      filmImg: film17,
      filmReleaseDate: "19 May 2023",
      movieTitle: "The Batman",
      filmCat: "Action",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    },
    {
      widthSizeCard: "230px",
      heightSizeCard: "300px",
      filmImg: film3,
      filmReleaseDate: "05 Jan 2023",
      movieTitle: "Breaking Bad",
      filmCat: "Action",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
    },
    {
      widthSizeCard: "230px",
      heightSizeCard: "300px",
      filmImg: film8,
      filmReleaseDate: "16 October 2023",
      movieTitle: "The Batman",
      filmCat: "Action",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    },
  ];
  const ratingFilmCardData = [
    {
      widthSizeCard: "290px",
      heightSizeCard: "350px",
      filmImg: film13,
      filmViews: "10k",
      filmReleaseDate: "16 October 2023",
      movieTitle: "The Room",
      filmCat: "Drama",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "After years of being held captive in an isolated shed by a kidnapper, Joy and her little son, Jack, manage to escape the confinement and gain their freedom.",
    },
    {
      widthSizeCard: "290px",
      heightSizeCard: "350px",
      filmImg: sifi3,
      filmViews: "20k",
      filmReleaseDate: "16 October 2015",
      movieTitle: "oblivion",
      filmCat: "Action",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "Jack Harper, a drone repairman stationed on Earth that has been ravaged by war with extraterrestrials, questions his identity after rescuing the woman who keeps appearing in his dreams.",
    },
    {
      widthSizeCard: "290px",
      heightSizeCard: "350px",
      filmImg: film12,
      releaseDate: "05 Jan 2013",
      filmViews: "5k",
      filmReleaseDate: "16 October 2023",
      movieTitle: "Thor Ragnarouk",
      filmCat: "Action",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "Ative in an isolated shed by a kidnapper, Joy and her little son, Jack, manage to escape the confinement and gain their freedom.",
    },
    {
      widthSizeCard: "290px",
      heightSizeCard: "350px",
      filmImg: film6,
      releaseDate: "16 October 2023",
      filmViews: "35k",
      filmReleaseDate: "16 October 2012",
      movieTitle: "Interstellar",
      filmCat: "Action",
      filmDuration: "1h 30mins",
      filmViews: "3k",
      filmDesc:
        "After years of being held captive in an isolated shed by a kidnapper, Joy and her little son, Jack, manage to escape the confinement and gain their freedom.",
    },
  ];
  const currentLocation = useLocation();
  // const { movie } = location.state || {};
  return (
    <>
      <main className="main-container-home2">
      {currentLocation.pathname === "/movies-shows" && <Header />}
        <BannerMovie />
        <div className="container-movies-shows">
          <div className="red-catig center-flex">Movies</div>

          <div className="flexSlider">
            <div className="title-movies">
              <HeaderDesc className="" title="Our Genres" />
            </div>
            <SliderCatigores />
          </div>

          <div className="scroll-container">
            <div className="flexCardsMoviesPage">
              {cardCatigoresData.map((data, index) => (
                <CardCatigores
                  key={index}
                  title={data.title}
                  image={data.image}
                  sizeCard={data.sizeCard}
                />
              ))}
            </div>
          </div>
          <div className="flexSlider">
            <div className="title-movies">
              <HeaderDesc className="" title="Popular 10 In Geners" />
            </div>
            <SliderCatigores />
          </div>
          <div className="scroll-container">
            <div className="flexCardsMoviesPage">
              {popularCardCatigoresData.map((data, index) => (
                <CardCatigores
                  key={index}
                  showDiv={true}
                  classNaame="red-trending show-hide"
                  title={data.title}
                  image={data.image}
                  sizeCard={data.sizeCard}
                />
              ))}
            </div>
          </div>
          {/* end of popular movies */}
          <div className="flexSlider">
            <div className="title-movies">
              <HeaderDesc className="" title="Trending Now" />
            </div>
            <SliderCatigores />
          </div>
          <div className="scroll-container">
            <div className="flexCardsMoviesPage">
              {trendingFilmsCardData.map((data, index) => (
                <CardFilm
                  key={index}
                  showDiv={true}
                  classNameDuiration="duiration-film active"
                  classNameSeasons="duiration-film active"
                  classNameRelease="release-film "
                  classNameRating="duiration-film  "
                  widthSizeCard={data.widthSizeCard}
                  heightSizeCard={data.heightSizeCard}
                  filmImg={data.filmImg}
                  filmDuration={data.filmDuration}
                  filmCat={data.filmCat}
                  filmViews={data.filmViews}
                  movieTitle={data.movieTitle}
                  filmDesc={data.filmDesc}
                  filmReleaseDate={data.filmReleaseDate}
                />
              ))}
            </div>
          </div>
          {/* end of trending movies */}
          <div className="flexSlider">
            <div className="title-movies">
              <HeaderDesc className="" title="New Releases" />
            </div>
            <SliderCatigores />
          </div>
          <div className="scroll-container">
            <div className="flexCardsMoviesPage">
              {releaseFilmCardData.map((data, index) => (
                <CardFilm
                  key={index}
                  showDiv={true}
                  classNameDuiration="duiration-film "
                  classNameSeasons="duiration-film "
                  classNameRelease="release-film active "
                  classNameRating="duiration-film  "
                  widthSizeCard={data.widthSizeCard}
                  heightSizeCard={data.heightSizeCard}
                  movieTitle={data.movieTitle}
                  filmImg={data.filmImg}
                  filmDuration={data.filmDuration}
                  filmViews={data.filmViews}
                  filmDesc={data.filmDesc}
                  filmCat={data.filmCat}
                  filmReleaseDate={data.filmReleaseDate}
                />
              ))}
            </div>
          </div>
          {/* end of release movies */}
          <div className="flexSlider">
            <div className="title-movies">
              <HeaderDesc className="" title="Must - Watch Movies" />
            </div>
            <SliderCatigores />
          </div>
          <div className="scroll-container">
            <div className="flexCardsMoviesPage">
              {ratingFilmCardData.map((data, index) => (
                <CardFilm
                  key={index}
                  showDiv={true}
                  classNameDuiration="duiration-film active "
                  classNameSeasons="duiration-film "
                  classNameRelease="release-film  "
                  classNameRating="duiration-film active "
                  widthSizeCard={data.widthSizeCard}
                  heightSizeCard={data.heightSizeCard}
                  movieTitle={data.movieTitle}
                  filmImg={data.filmImg}
                  filmDuration={data.filmDuration}
                  filmViews={data.filmViews}
                  filmDesc={data.filmDesc}
                  filmCat={data.filmCat}
                  filmReleaseDate={data.filmReleaseDate}
                />
              ))}
            </div>
          </div>
        </div>
        {/* end of movies content */}

        {/* end of movies container */}
        <FreeTrialBanner />
      </main>
      {/* end of main-container-home */}
      <Footer />
    </>
  );
};
export default MoviesShows;
