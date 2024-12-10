import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="top-section">
        <span className="logo">Thanks for visiting !!</span>
        <div className="nav-links-container">
          <nav className="nav-links">
            <a href="#">Get Started</a>
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Support Center</a>
            <a href="#">Blog Posts</a>
          </nav>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/aaorgyacraft/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/instagram.jpg" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/facebook.jpg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/aarogya-craft-471011341/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/linkedin.jpg" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/Aakash091-dark/AarogyaCraft" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/github.jpg" alt="GitHub" className="social-icon" />
          </a>
        </div>
      </div>
      <hr className="divider" />
      <div className="bottom-section">
        <div className="policy-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookies Settings</a>
        </div>
        <p>© 2024 AarogyaCraft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;