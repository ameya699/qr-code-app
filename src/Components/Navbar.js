import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import applogo from "../images/logo.png";
import { category } from "../quotedata/data";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = "https://api.api-ninjas.com/v1/quotes";

const Navbar = () => {
  console.log(category.data.length);
  const [quote, setQuote] = useState("");
  console.log(API_KEY);
  useEffect(() => {
    randomQuote();
  }, []);
  //generaterandomquote based on the category
  const randomQuote = () => {
    let categoryLength = category.data.length;
    let categorylist = category.data;
    let currentindex = Math.floor(Math.random() * categoryLength);
    let currentCategory = categorylist[currentindex];

    axios
      .get(`${URL}?category=${currentCategory}`, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      })
      .then((res) => setQuote(res.data[0].quote))
      .catch((err) => setQuote(":( no quote for today"));
  };
  return (
    <div className="navbar-container">
      <img src={applogo} style={{ height: "2.2rem", paddingLeft: "1.2rem" }} />
      <p
        style={{
          fontSize: "10px ",
          fontStyle: "italic",
          maxWidth: "fit-content",
          paddingLeft: "0.8rem",
          paddingRight: "0.8rem",
        }}
      >
        {quote.length !== 0 ? quote : "Loading today's quote..."}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "flex-end",
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
