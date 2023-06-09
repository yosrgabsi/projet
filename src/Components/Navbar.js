import React, { useState } from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
<img src={logo} alt="Logo" />
</Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Our Recipes </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu">  Our Recipes </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
        
        </button>
      </div>
    </div>
  );
}

export default Navbar;
