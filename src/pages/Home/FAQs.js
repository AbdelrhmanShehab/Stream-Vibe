import React, { useState } from "react";
import "./home.css";
import "../../assets/responsive.css";
import plusIcon from "../../assets/imgs/plusWhite.svg";
import minusIcon from "../../assets/imgs/minus-icon.svg";
const FAQs = ({ questionNum, questionContent, questionAnswer, miniMax }) => {
  const [isAnswerd, setAnswer] = useState(false);
  function showAnswer() {
    setAnswer(!isAnswerd);
  }
  return (
    <>
      <div className="question-width">
        <div className="question">
          <div className="question-number">{questionNum}</div>
          <div>
            <h3 className="question-content">{questionContent}</h3>
            {isAnswerd && <p className="answer">{questionAnswer}</p>}
          </div>
          <img
            onClick={showAnswer}
            className="minus-icon"
            src={isAnswerd ? minusIcon : plusIcon}
          />
        </div>
        <div className="line-between-questions"></div>
      </div>
    </>
  );
};
export default FAQs;
