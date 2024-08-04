import React from "react";
import "../../assets/App.css";
import "./home.css";
import "../../assets/responsive.css";
import MainBtn from "../../components/MainBtn";
import PhotoHomeBanner from "./PhotoHomeBanner";
// import images
import film1 from "../../assets/imgs/film1.jpg";
import film2 from "../../assets/imgs/film2.jpg";
import film3 from "../../assets/imgs/film3.jpg";
import film4 from "../../assets/imgs/film4.jpg";
import film5 from "../../assets/imgs/film5.jpg";
import film6 from "../../assets/imgs/film6.jpg";
import film7 from "../../assets/imgs/film7.jpg";
import film8 from "../../assets/imgs/film8.jpg";
import film9 from "../../assets/imgs/film9.jpg";
import film11 from "../../assets/imgs/film11.jpg";
import film12 from "../../assets/imgs/film12.jpg";
import film13 from "../../assets/imgs/film13.png";
import film14 from "../../assets/imgs/film14.jpg";
import film15 from "../../assets/imgs/film15.jpg";
import adv4 from "../../assets/imgs/adv4.webp";
import film16 from "../../assets/imgs/film16.jpg";
import film17 from "../../assets/imgs/film17.jpeg";
import film18 from "../../assets/imgs/film18.jpg";
import adv1 from "../../assets/imgs/adv1.jpg";
import adv2 from "../../assets/imgs/adv2.jpg";
import adv3 from "../../assets/imgs/adv3.jpg";
import sifi1 from "../../assets/imgs/sifi1.jpg";
import sifi2 from "../../assets/imgs/sifi2.jpg";
import sifi3 from "../../assets/imgs/sifi3.jpg";
import horror1 from "../../assets/imgs/horror1.jpg";
import horror2 from "../../assets/imgs/horror2.jpeg";
import horror3 from "../../assets/imgs/horror3.jpg";
import horror4 from "../../assets/imgs/horror4.jpg";
import iconBackground from "../../assets/imgs/logo-baackground.png";

const homeBannerData1 = [
  { homeBannerPhoto: film1 },
  { homeBannerPhoto: film2 },
  { homeBannerPhoto: film3 },
  { homeBannerPhoto: film4 },
  { homeBannerPhoto: film5 },
  { homeBannerPhoto: film6 },
  { homeBannerPhoto: film7 },
  { homeBannerPhoto: film8 },
  { homeBannerPhoto: film9 },
];
const homeBannerData2 = [
  { homeBannerPhoto: adv1 },
  { homeBannerPhoto: film11 },
  { homeBannerPhoto: adv2 },
  { homeBannerPhoto: adv4 },
  { homeBannerPhoto: film13 },
  { homeBannerPhoto: film14 },
  { homeBannerPhoto: film15 },
  { homeBannerPhoto: adv3 },
  { homeBannerPhoto: film17 },
];
const homeBannerData3 = [
  { homeBannerPhoto: film18 },
  { homeBannerPhoto: horror2 },
  { homeBannerPhoto: film13 },
  { homeBannerPhoto: film15 },
  { homeBannerPhoto: horror4 },
  { homeBannerPhoto: film1 },
  { homeBannerPhoto: film18 },
  { homeBannerPhoto: film3 },
  { homeBannerPhoto: film2 },
];
const homeBannerData4 = [
  { homeBannerPhoto: film14 },
  { homeBannerPhoto: sifi1 },
  { homeBannerPhoto: film11 },
  { homeBannerPhoto: sifi2 },
  { homeBannerPhoto: sifi3 },
  { homeBannerPhoto: film7 },
  { homeBannerPhoto: film1 },
  { homeBannerPhoto: horror1 },
  { homeBannerPhoto: film12 },
];

const Banner = () => {
  return (
    <figure className="background-home">
      <img className="big-logo" src={iconBackground} alt="Background Icon" />

      <div className="banner-home">
        {homeBannerData1.map((data, index) => (
          <PhotoHomeBanner key={index} homeBannerPhoto={data.homeBannerPhoto} />
        ))}
      </div>
      <div className="banner-home">
        {homeBannerData2.map((data, index) => (
          <PhotoHomeBanner key={index} homeBannerPhoto={data.homeBannerPhoto} />
        ))}
      </div>
      <div className="banner-home">
        {homeBannerData3.map((data, index) => (
          <PhotoHomeBanner key={index} homeBannerPhoto={data.homeBannerPhoto} />
        ))}
      </div>
      <div className="banner-home">
        {homeBannerData4.map((data, index) => (
          <PhotoHomeBanner key={index} homeBannerPhoto={data.homeBannerPhoto} />
        ))}
      </div>
      <figcaption style={{ height: "fit-content" }}>
        <h1 className="title-home">The Best Streaming Experience</h1>
        <h3 className="desc-under-title-home">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </h3>
        <h3 className="desc-under-title-home-small">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
        </h3>
        <div className="middle-position">
          <MainBtn
            btnContent="Start Watching Now"
            showIcon={true}
            iconSize="20px"
          />
        </div>
      </figcaption>
    </figure>
  );
};

export default Banner;
