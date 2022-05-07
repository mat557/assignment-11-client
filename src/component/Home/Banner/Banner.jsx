import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner" className="banner">
      <div className="banner-text">
        <h1>Knowledge Store</h1>
        <p>Where we store your books</p>
        <a href="home#stock">Check Store</a>
      </div>
    </div>
  );
};

export default Banner;
