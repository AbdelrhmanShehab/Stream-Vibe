import React from "react";
import Header from "../../components/Header";
import SupportBannerPhoto from "./SupportBannerPhoto";
import TextBox from "../../components/TextBox";
import DropDownCountries from "../../components/DropDownCountries";
import FAQs from "../Home/FAQs";
import HeaderDesc from "../../components/HeaderDesc";
import MainBtn from "../../components/MainBtn";
import FreeTrialBanner from "../../components/FreeTrialBanner";
import { useLocation } from "react-router-dom";

// import images
import film1 from "../../assets/imgs/film1.jpg";
import film2 from "../../assets/imgs/film2.jpeg";
import film3 from "../../assets/imgs/film3.jpg";
import film4 from "../../assets/imgs/film4.jpg";
import film5 from "../../assets/imgs/film5.jpg";
import film6 from "../../assets/imgs/film6.jpg";
import film7 from "../../assets/imgs/film7.jpg";
import film8 from "../../assets/imgs/film8.jpg";
import film9 from "../../assets/imgs/film9.jpg";
import adv1 from "../../assets/imgs/adv1.jpg";
import adv2 from "../../assets/imgs/adv2.jpg";
import adv3 from "../../assets/imgs/adv3.jpg";
import adv4 from "../../assets/imgs/adv4.webp";
import sifi1 from "../../assets/imgs/sifi1.jpg";
import sifi2 from "../../assets/imgs/sifi2.jpg";
import sifi3 from "../../assets/imgs/sifi3.jpg";
import minusIcon from "../../assets/imgs/minus-icon.svg";
import "./support.css";
import Footer from "../../components/Footer";
const photoBannerData = [
  { supportBannerPhoto: film1 },
  { supportBannerPhoto: film2 },
  { supportBannerPhoto: film3 },
  { supportBannerPhoto: film4 },
  { supportBannerPhoto: film5 },
  { supportBannerPhoto: film6 },
  { supportBannerPhoto: film7 },
  { supportBannerPhoto: film8 },
  { supportBannerPhoto: film9 },
  { supportBannerPhoto: adv1 },
  { supportBannerPhoto: adv2 },
  { supportBannerPhoto: adv3 },
  { supportBannerPhoto: adv4 },
  { supportBannerPhoto: sifi1 },
  { supportBannerPhoto: sifi2 },
  { supportBannerPhoto: sifi3 },
];
const FQAsData = [
  {
    questionNum: "01",
    questionContent: "What is StreamVibe?",
    questionAnswer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    miniMax: minusIcon,
  },
  {
    questionNum: "02",
    questionContent: "What devices can I use to watch StreamVibe?",
    questionAnswer:
      "You can watch StreamVibe on various devices, including smartphones, tablets, smart TVs, and computers. StreamVibe is compatible with most popular web browsers and operating systems.",
    miniMax: minusIcon,
  },
  {
    questionNum: "03",
    questionContent: "How do I search for movies and shows on StreamVibe?",
    questionAnswer:
      "Use the search bar located at the top of the homepage. Simply type in the title or keyword related to the movie or show you’re looking for, and press the search button to see the results.",
    miniMax: minusIcon,
  },
  {
    questionNum: "04",
    questionContent: "Can I download movies and shows for offline viewing?",
    questionAnswer:
      "Currently, StreamVibe does not offer a download feature. However, you can stream content online anytime as long as you have an active internet connection.",
    miniMax: minusIcon,
  },
  {
    questionNum: "05",
    questionContent: "What is StreamVibe?",
    questionAnswer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    miniMax: minusIcon,
  },
  {
    questionNum: "06",
    questionContent: "What subscription plans does StreamVibe offer?",
    questionAnswer:
      "StreamVibe offers various subscription plans, including monthly and annual options. Each plan provides access to all movies and shows, with varying levels of HD quality and simultaneous",
    miniMax: minusIcon,
  },
  {
    questionNum: "07",
    questionContent: "How do I cancel my StreamVibe subscription?",
    questionAnswer:
      "To cancel your subscription, go to your account settings, select the subscription tab, and click Cancel Subscription Your access will remain active until the end of the billing period.",
    miniMax: minusIcon,
  },
  {
    questionNum: "08",
    questionContent:
      "What should I do if I experience buffering or streaming issues?",
    questionAnswer:
      "If you experience buffering or streaming issues, try the following: check your internet connection, restart your device, or clear your browser cache. If the issue persists, contact our support team for assistance.",
    miniMax: minusIcon,
  },
];
function Support() {
  const currentLocation = useLocation();

  return (
    <>
      <div className="main-container-home2">
        {currentLocation.pathname === "/support" && <Header />}
        <div className="flex-support">
          <div className="header-banner-support">
            <header>
              <h1
                className="section-title"
                style={{
                  fontSize: "38px",
                  lineHeight: "150%",
                  fontWeight: "300",
                  color: "white",
                  width: "100%",
                  fontWeight: "bold",
                  marginBottom: "1.8rem",
                }}
              >
                Welcome to our support page!{" "}
              </h1>
              <h3
                className="section-desc"
                style={{
                  color: "#999999",
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  width: "100%",
                  lineHeight: "150%",
                  marginBottom: "35px",
                }}
              >
                We're here to help you with any problems you may be having with
                our product.
              </h3>
            </header>{" "}
            <div className="banner-support">
              <div className="banner-support-content">
                {photoBannerData.map((data, index) => (
                  <SupportBannerPhoto
                    key={index}
                    supportBannerPhoto={data.supportBannerPhoto}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* end of flex left support */}
          <div className="support-message-box">
            <div className="flex-message">
              <div className="text-boxes-flex" style={{ width: "45%" }}>
                <TextBox boxTextHolder="First Name" labelForBox="First Name" />{" "}
                <TextBox boxTextHolder="Email" labelForBox="Enter your Email" />
              </div>
              <div style={{ width: "45%" }}>
                <TextBox boxTextHolder="Last Name" labelForBox="Last Name" />
                <div
                  className="text-boxes-flex"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "5px",
                    justifyContent: "space-between",
                  }}
                >
                  <DropDownCountries />
                  <div className="label-textbox">
                    <label class="label-box">Phone Number</label>
                    <input
                      class="text-box-phone"
                      type="text"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="label-textbox">
              <label class="label-box">Message</label>
              <input class="text-box-msg" type="text" placeholder="" />
            </div>
          </div>
          {/* end of right flex support msg */}
        </div>
        {/* end of flex supprt msgs and banner support*/}
        <div className="flex-questions">
          <HeaderDesc
            title="What is StreamVibe?"
            desc="StreamVibe is a streaming service that allows you to watch
          movies and shows on demand."
          />
          <MainBtn btnContent="Ask a Question" />
        </div>
        <div className="flexQuestions">
          {FQAsData.map((data, index) => (
            <FAQs
              key={index}
              questionNum={data.questionNum}
              questionContent={data.questionContent}
              questionAnswer={data.questionAnswer}
              miniMax={data.miniMax}
            />
          ))}
        </div>
        {/* end of FQAs */}
        <FreeTrialBanner />
      </div>
      {/* end of main container */}
      <Footer />
    </>
  );
}
export default Support;
