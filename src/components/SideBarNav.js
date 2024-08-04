import React from "react";
import "../assets/responsive.css";
import { Link, useLocation } from "react-router-dom";

function SideBarNav({ isOpen }) {
  return (
    <div className={`side-bar ${isOpen ? "open" : ""}`}>
      <ul className="side-bar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies-shows">Movies & Shows</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/subscriptions">Subscriptions</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBarNav;
