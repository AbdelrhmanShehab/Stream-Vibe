import React from "react";
import "./components.css";
function toggle() {
  return (
    <div className="toggle">
      <div style={{ display: "flex" }}>
        <div className="selected-plan">
          <p style={{ color: "white", fontSize: "1.4rem" }}>Monthly</p>
        </div>
        <p className="yearly-plan" style={{ color: "gray", fontSize: "1.4rem" }}>Yearly</p>
      </div>
    </div>
  );
}
export default toggle;
