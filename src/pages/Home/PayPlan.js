import React from "react";
import "./home.css";
import "../../assets/responsive.css";

const PayPlan = ({ planName, planDesc, planMoney }) => {
  return (
    <article className="plan-card">
      <div className="plan-content">
        <h2 className="plan-title">{planName}</h2>
        <p className="plan-desc">{planDesc}</p>
        <p className="money-plan">
          <span className="money-plan-span">{planMoney}</span> /month
        </p>
        <div className="two-btns-plan">
          <button className="btn-trial">Start Free Trial</button>
          <button className="main-btn">Choose Plan</button>
        </div>
      </div>
    </article>
  );
};
export default PayPlan;
