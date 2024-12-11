import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css";

const Navbar = () => {
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Languages");
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguagesDropdown(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the mobile menu visibility
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        AarogyaCraft
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Our Services</Link>
        </li>
        

        {/* Expertizes Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setShowIndustriesDropdown(true)}
          onMouseLeave={() => setShowIndustriesDropdown(false)}
        >
          <span className="span">Expertizes</span>
          <span className="dropdown-icon">▼</span>
          {showIndustriesDropdown && (
            <div className="expertizes-dropdown-menu">
              <div className="expertize-item">Technology</div>
              <div className="expertize-item">Banking</div>
              <div className="expertize-item">Education</div>
              <div className="expertize-item">Finance</div>
              <div className="expertize-item">Healthcare</div>
            </div>
          )}
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        {/* Languages Dropdown */}
        <li>
          <div
            className="language-dropdown"
            onClick={() => setShowLanguagesDropdown(!showLanguagesDropdown)}
          >
            <span className="language-icon">🌐</span>
            <span>{selectedLanguage}</span>
            <span className="dropdown-icon">▼</span>
          </div>
          {showLanguagesDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => handleLanguageSelect("English")}>English</li>
              <li onClick={() => handleLanguageSelect("Spanish")}>Spanish</li>
              <li onClick={() => handleLanguageSelect("French")}>French</li>
              <li onClick={() => handleLanguageSelect("Hindi")}>Hindi</li>
              <li onClick={() => handleLanguageSelect("Japanese")}>Japanese</li>
              <li onClick={() => handleLanguageSelect("Urdu")}>Urdu</li>
              <li onClick={() => handleLanguageSelect("German")}>German</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
