import React, { useState } from "react";
import "./components.css";
import { Link, useLocation } from "react-router-dom";
import "../assets/responsive.css";
import "../assets/responsive.css";

function NavMenu() {
  const location = useLocation();

  // Determine if the path matches the current location
  const getLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="header-menu">
      <ul className="links-header-menu">
        <li className={`home-link-menu ${getLinkClass("/")}`}>
          <Link to="/" className="link-menu">
            Home
          </Link>
        </li>
        <li className={`movies-link-menu ${getLinkClass("/movies-shows")}`}>
          <Link to="/movies-shows" className="link-menu">
            Movies & Shows
          </Link>
        </li>
        <li className={`support-link-menu ${getLinkClass("/support")}`}>
          <Link to="/support" className="link-menu">
            Support
          </Link>
        </li>
        <li className={`sub-link-menu ${getLinkClass("/subscriptions")}`}>
          <Link to="/subscriptions" className="link-menu">
            Subscriptions
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
