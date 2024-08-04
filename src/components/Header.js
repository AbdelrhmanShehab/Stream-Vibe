import React, { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SideBarNav from "./SideBarNav";
import "./components.css";
import "../assets/responsive.css";
import SearchNotifi from "./SearchNotifi";
function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <header className="header">
      <div className="header-container">
        <Logo onBurgerClick={handleBurgerClick} />
        <SideBarNav isOpen={isSideBarOpen} />
        <NavMenu />
        <SearchNotifi />
      </div>
    </header>
    // end of header
  );
}
export default Header;
