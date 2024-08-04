import React from "react";

const HeaderDesc = ({ title, desc }) => {
  return (
    <header>
      <h2
        className="section-title"
        style={{
          fontSize: "2.8rem",
          color: "white",
          fontWeight: "bold",
          marginBottom: "12px",
        }}
      >
        {title}
      </h2>
      <h3
        className="section-desc"
        style={{
          color: "#999999",
          fontSize: "1.6rem",
          fontWeight: "500",
          width: "max-width",
          lineHeight: "135%",
        }}
      >
        {desc}
      </h3>
    </header>
  );
};
export default HeaderDesc;
