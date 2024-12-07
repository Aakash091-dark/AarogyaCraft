import React from "react";
import "./Hero.css"; // Importing the CSS file

const Hero = () => {
    return (
        <div className="hero-container">
            {/* Left Side */}
            <div className="hero-left">
                <h1 className="hero-heading">The new way to cloud starts here</h1>
                <p className="hero-description">
                Build apps fast, leverage generative AI, and analyze data in seconds—all with Google-grade security.
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