import React, { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SideBarNav from "./SideBarNav";
import "./components.css";
import "../assets/responsive.css";
import SearchNotifi from "./SearchNotifi";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <Logo onBurgerClick={handleBurgerClick} />
        </Link>
        <SideBarNav isOpen={isSideBarOpen} />
        <NavMenu />
        <SearchNotifi />
      </div>
    </header>
    // end of header
  );
}
export default Header;
