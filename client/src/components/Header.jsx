import React from "react";
import "../styles/Header.css";
import collegelogo from "/collegelogo.jpg";
import teamlogo from "/teamlogo.jpg";

const Header = ({ title }) => {
  return (
    <header className="header">
      <img src={collegelogo} alt="College Logo" className="collegelogo" />
      <h1 className="heading">{title}</h1>
      <img src={teamlogo} alt="Team Logo" className="teamlogo" />
    </header>
  );
};

export default Header;