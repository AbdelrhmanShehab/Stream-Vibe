import React from "react";
import "./components.css";
const TextBox = ({ labelForBox, boxTextHolder, widthBox }) => {
  return (
    <div className="label-textbox">
      <label class="label-box">{boxTextHolder}</label>
      <input
        className="text-box"
        type="text"
        placeholder={labelForBox}
      />
    </div>
  );
};
export default TextBox;
