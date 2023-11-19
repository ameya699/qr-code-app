import React from "react";
import "../styles/navbar.css";
import applogo from "../images/logo.png";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={applogo} style={{ height: "2.2rem", paddingLeft: "1.2rem" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          columnGap: "1rem",
          paddingRight: "0.6rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://ameya699.github.io/ameyaawatade.github.io/"
          target="_blank"
        >
          About
        </a>
        <a href="https://www.linkedin.com/in/ameyaawatade/" target="_blank">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
