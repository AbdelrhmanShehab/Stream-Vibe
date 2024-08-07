import React from "react";
import MainBtn from "./MainBtn";
import PhotoBanner from "./PhotoBanner";
import PhotoRow from "./PhotosRow";
// import images
import film1 from "../assets/imgs/film1.jpg";
import film2 from "../assets/imgs/film2.jpg";
import film3 from "../assets/imgs/film3.jpg";
import film4 from "../assets/imgs/film4.jpg";
import film5 from "../assets/imgs/film5.jpg";
import film6 from "../assets/imgs/film6.jpg";
import film7 from "../assets/imgs/film7.jpg";
import film8 from "../assets/imgs/film8.jpg";
import film9 from "../assets/imgs/film9.jpg";
import film10 from "../assets/imgs/film10.jpg";
import film11 from "../assets/imgs/film11.jpg";
import film12 from "../assets/imgs/film12.jpg";
import film13 from "../assets/imgs/film13.png";
import film14 from "../assets/imgs/film14.jpg";
import film15 from "../assets/imgs/film15.jpg";
import film16 from "../assets/imgs/film16.jpg";
import film17 from "../assets/imgs/film17.jpeg";
import adv1 from "../assets/imgs/adv1.jpg";
import adv2 from "../assets/imgs/adv2.jpg";
import adv3 from "../assets/imgs/adv3.jpg";
import adv4 from "../assets/imgs/adv4.webp";
import sifi1 from "../assets/imgs/sifi1.jpg";
import sifi2 from "../assets/imgs/sifi2.jpg";
import sifi3 from "../assets/imgs/sifi3.jpg";
import horror1 from "../assets/imgs/horror1.jpg";
import horror2 from "../assets/imgs/horror2.jpeg";
import horror3 from "../assets/imgs/horror3.jpg";
import horror4 from "../assets/imgs/horror4.jpg";
// free trial banner end home data
const photoBannerData = [
  { bannerPhoto: film1 },
  { bannerPhoto: film2 },
  { bannerPhoto: film3 },
  { bannerPhoto: film4 },
  { bannerPhoto: film5 },
  { bannerPhoto: film6 },
  { bannerPhoto: film7 },
  { bannerPhoto: film8 },
  { bannerPhoto: film9 },
  { bannerPhoto: adv1 },
  { bannerPhoto: adv2 },
  { bannerPhoto: adv3 },
  { bannerPhoto: adv4 },
  { bannerPhoto: sifi1 },
  { bannerPhoto: sifi2 },
  { bannerPhoto: sifi3 },
  { bannerPhoto: horror1 },
  { bannerPhoto: horror2 },
  { bannerPhoto: horror3 },
  { bannerPhoto: horror4 },
  { bannerPhoto: film17 },
  { bannerPhoto: film16 },
  { bannerPhoto: film15 },
  { bannerPhoto: film14 },
  { bannerPhoto: film13 },
  { bannerPhoto: film10 },
  { bannerPhoto: film11 },
  { bannerPhoto: film12 },
  { bannerPhoto: adv1 },
  { bannerPhoto: sifi1 },
  { bannerPhoto: sifi2 },
  { bannerPhoto: film3 },
  { bannerPhoto: horror1 },
  { bannerPhoto: adv2 },
  { bannerPhoto: horror3 },
  { bannerPhoto: horror4 },
];
const FreeTrialBanner = ({ bannerImage }) => {
  return (
    <figure className="banner-trial">
      <div className="cover-banner-trial"></div>
      <div className="banner-trail-content">
        <figcaption>
          <h1
            style={{
              color: "white",
              marginBottom: "20px",
              fontWeight: "500",
              fontSize: "2.9rem",
            }}
          >
            Strat your free trial today!
          </h1>
          <p style={{ color: "grey" }}>
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </figcaption>
        <MainBtn btnContent="Start a free trial" />
      </div>
      <div className="banner-under-photos">
        {photoBannerData.map((data, index) => (
          <PhotoBanner key={index} bannerPhoto={data.bannerPhoto} />
        ))}
      </div>
    </figure>
  );
};
export default FreeTrialBanner;
