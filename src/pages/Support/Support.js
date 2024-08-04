import React from "react";
import Header from "../../components/Header";
import SupportBannerPhoto from "./SupportBannerPhoto";
import TextBox from "../../components/TextBox";
import DropDownCountries from "../../components/DropDownCountries";
import FAQs from "../Home/FAQs";
import HeaderDesc from "../../components/HeaderDesc";
import MainBtn from "../../components/MainBtn";
import FreeTrialBanner from "../../components/FreeTrialBanner";
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
    questionContent: "What is StreamVibe?",
    questionAnswer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    miniMax: minusIcon,
  },
  {
    questionNum: "03",
    questionContent: "What is StreamVibe?",
    questionAnswer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    miniMax: minusIcon,
  },
  {
    questionNum: "04",
    questionContent: "What is StreamVibe?",
    questionAnswer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
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
    questionContent: "What is StreamVibe?",
    questionAnswer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    miniMax: minusIcon,
  },
  {
    questionNum: "07",
    questionContent: "What is StreamVibe?",
    questionAnswer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    miniMax: minusIcon,
  },
  {
    questionNum: "08",
    questionContent: "What is StreamVibe?",
    questionAnswer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    miniMax: minusIcon,
  },
];
function Support() {
  return (
    <>
      <Header />
      <div className="main-container-home2">
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
                  width: "300px",
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
                  width: "450px",
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
              <div style={{ width: "45%" }}>
                <TextBox boxTextHolder="First Name" labelForBox="First Name" />{" "}
                <TextBox boxTextHolder="Email" labelForBox="Enter your Email" />
              </div>
              <div style={{ width: "45%" }}>
                <TextBox boxTextHolder="Last Name" labelForBox="Last Name" />
                <div
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
