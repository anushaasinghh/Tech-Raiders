import React from "react";
import "./Navbar.css"; // Import the corresponding CSS


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">QPEasy</span>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">Features</button>
        <button className="navbar-btn">About</button>
        <button className="navbar-btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
