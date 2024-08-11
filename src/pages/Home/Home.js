import React from "react";
import "../../assets/App.css";
import "./home.css";
import "../../assets/responsive.css";
import Header from "../../components/Header";
import Banner from "../../pages/Home/Banner";
import HeaderDesc from "../../components/HeaderDesc";
import MainBtn from "../../components/MainBtn";
import SliderCatigores from "../../components/SliderCatigories";
import CardCatigores from "../../components/CardCatigores";
import DevicesCard from "./DevicesCard";
import FAQs from "./FAQs";
import PayPlan from "./PayPlan";
import Toggle from "../../components/Toggle";
import FreeTrialBanner from "../../components/FreeTrialBanner";
import Footer from "../../components/Footer";
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
import film10 from "../../assets/imgs/film10.jpg";
import film11 from "../../assets/imgs/film11.jpg";
import film12 from "../../assets/imgs/film12.jpg";
import film13 from "../../assets/imgs/film13.png";
import film14 from "../../assets/imgs/film14.jpg";
import film15 from "../../assets/imgs/film15.jpg";
import film16 from "../../assets/imgs/film16.jpg";
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
// impor various device images
import phone from "../../assets/imgs/mobile-icon.svg";
import tablet from "../../assets/imgs/tablet-icon.svg";
import laptop from "../../assets/imgs/laptop-icon.svg";
import tv from "../../assets/imgs/tv-icon.svg";
import ps from "../../assets/imgs/ps-icon.svg";
import vr from "../../assets/imgs/vr-icon.svg";
// FQAs section imgs
import minusIcon from "../../assets/imgs/minus-icon.svg";
import plusIcon from "../../assets/imgs/plus-icon.svg";

function Home() {
  // catigores cards repetition
  const cardCatigoresData = [
    {
      title: "Action",
      image: [film4, film12, film10, film17],
    },
    {
      title: "Adventure",
      image: [adv1, adv2, adv3, adv4],
    },
    {
      title: "Sci-fi",
      image: [sifi1, sifi2, sifi3, film6],
    },
    {
      title: "Drama",
      image: [film14, film13, film3, film5],
    },
    {
      title: "Horror",
      image: [horror1, horror2, horror3, horror4],
    },
  ];

  // various devices cards repetition
  const devicesCardData = [
    {
      deviceTitle: "Smartphones",
      deviceImage: phone,
      deviceDesc:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      deviceTitle: "Tablet",
      deviceImage: tablet,
      deviceDesc:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      deviceTitle: "Smart TV",
      deviceImage: tv,
      deviceDesc:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      deviceTitle: "Laptops",
      deviceImage: laptop,
      deviceDesc:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      deviceTitle: "Gaming Consoles",
      deviceImage: ps,
      deviceDesc:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      deviceTitle: "VR Headsets",
      deviceImage: vr,
      deviceDesc:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
  ];
  // FQAs repetition

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

  // plans payment data

  const payPlanData = [
    {
      planName: "Basic Plan",
      planDesc:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      planMoney: "$9.99",
    },
    {
      planName: "Standard Plan",
      planDesc:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      planMoney: "$12.99",
    },
    {
      planName: "Premium Plan",
      planDesc:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      planMoney: "$14.99",
    },
  ];

  return (
    <>
      <div className="fade-background-top"></div>
      <div className="fade-background-bottom"></div>
      <Banner />
      <Header />

      {/* end of banner */}
      {/* start of main page content */}
      <main className="main-container-home2">
        <div className="flexSpaceBetweenCatig">
          <HeaderDesc
            title="Explore our wide variety of categories"
            desc="Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new"
          />
          <SliderCatigores />
        </div>
        <div className="scroll-container">
          <div className="flexSpaceCards">
            {cardCatigoresData.map((data, index) => (
              <CardCatigores
                key={index}
                title={data.title}
                image={data.image}
              />
            ))}
          </div>
        </div>
        {/* various devices section */}
        <div className="flexSpaceBetween">
          <HeaderDesc
            title="We Provide you streaming experience across various devices."
            desc="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
          />
        </div>
        <div className="flexVarious">
          {devicesCardData.map((data, index) => (
            <DevicesCard
              key={index}
              deviceTitle={data.deviceTitle}
              deviceImage={data.deviceImage}
              deviceDesc={data.deviceDesc}
            />
          ))}
        </div>
        {/* FQAs section */}
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
        {/* paymentplan section */}
        <div className="flexSpaceBetween">
          <HeaderDesc
            title="Choose the plan that's right for you"
            desc="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
          />
          <Toggle />
        </div>
        <div className="payPlanFlex">
          {payPlanData.map((data, index) => (
            <PayPlan
              key={index}
              planName={data.planName}
              planDesc={data.planDesc}
              planMoney={data.planMoney}
            />
          ))}
        </div>
        <FreeTrialBanner />
      </main>
      <Footer />
    </>
  );
}
export default Home;
