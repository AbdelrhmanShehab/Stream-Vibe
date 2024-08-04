import React from "react";
import "./home.css";
import "../../assets/responsive.css";
const FAQs = ({ questionNum, questionContent, questionAnswer, miniMax }) => {
  return (
    <>
      <div className="question-width">
        <div className="question">
          <div className="question-number">{questionNum}</div>
          <div>
            <h3 className="question-content">{questionContent}</h3>
            <p className="answer">{questionAnswer}</p>
          </div>
          <img className="minus-icon" src={miniMax} />
        </div>
        <div className="line-between-questions"></div>
      </div>
    </>
  );
};
export default FAQs;
