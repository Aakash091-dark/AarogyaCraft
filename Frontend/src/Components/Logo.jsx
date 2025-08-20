import React from "react";
import "./Logo.css";
import logoImage from "../assets/images/aarogya_logo_transparent.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="AarogyaCraft Logo" className="logo-image" />
    </div>
  );
};

export default Logo;
