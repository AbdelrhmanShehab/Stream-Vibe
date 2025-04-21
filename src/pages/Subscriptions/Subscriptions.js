import React from "react";
import Header from "../../components/Header";
import PayPlan from "../Home/PayPlan";
import HeaderDesc from "../../components/HeaderDesc";
import Toggle from "../../components/Toggle";
import FreeTrialBanner from "../../components/FreeTrialBanner";
import Footer from "../../components/Footer";
import "../../assets/responsive.css";
import { useLocation } from "react-router-dom";

function Subscriptions() {
  const currentLocation = useLocation();

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
      <div className="main-container-home2">
      {currentLocation.pathname === "/subscriptions" && <Header />}
        <div className="flexSpaceBetween" style={{ marginTop: "100px" }}>
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
      </div>
      <Footer />
    </>
  );
}
export default Subscriptions;
