import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>AarogyaCraft</h3>
            <p>
              Streamlining operations for a brighter, more efficient future.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="footer-legal">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/aaorgyacraft/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/aarogya-craft-471011341/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Aakash091-dark/AarogyaCraft" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AarogyaCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
