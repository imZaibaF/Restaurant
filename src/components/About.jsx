import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <img src="dinner1.jpeg" alt="about" />
          </div>

          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p className="mid">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. t has
                survived not only five centuries.
              </p>
            </div>

            <Link to={"/"}>Read More</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
