import React from "react";
import "./Hero.css"; // Importing the CSS file

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Left Side */}
      <div className="hero-left">
        <h1 className="hero-heading">
          Transform Your Business with Cloud Solutions
        </h1>
        <p className="hero-description">
          Discover innovative cloud-based management systems tailored for
          various industries . Streamline your operations and enhance
          productivity with our custmizable and pre-built solutions.
        </p>
        {/* <div className="hero-buttons">
                    <a href="#" className="btn btn-one">Get started for free</a>
                    <a href="#" className="btn btn-two">Contact sales</a>
                </div> */}
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <video
          className="hero-video"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          controls
        />
      </div>
    </div>
  );
};

export default Hero;
