import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h2 className="title">
              <b>
                Discover the <font color="red">Best</font> food and Drinks
              </b>
            </h2>
          </div>
          <h4>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </h4>

          <div className="mid">
            <Link to={"/"}>Read More</Link>
          </div>
          <div className="combined_boxes">
            <div className="imageBox"></div>
            <div className="textAndLogo">
              <div className="textWithSvg"></div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="./hero1.png" alt="hero" />
            <img src="hero2.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
