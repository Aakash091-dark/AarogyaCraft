import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Auth from "./Auth";
import Logo from "./Logo";
import { Account, Client } from "appwrite";

const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("6886ffec0010e7b19e2a");

const account = new Account(client);

const Navbar = () => {
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Languages");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showUserOptions, setShowUserOptions] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await account.get();
        setLoggedInUser(user.name || user.email.split("@")[0]);
      } catch (error) {
        // Not logged in
      }
    };
    checkUser();
  }, []);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguagesDropdown(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    account.deleteSession("current").then(() => {
      setLoggedInUser(null);
      setShowUserOptions(false);
    });
  };

  return (
    <>
      <nav className={`navbar ${showAuthForm ? "blurred" : ""}`}>
        <Logo />

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

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="language-container">
            <div
              className="language-dropdown"
              onClick={() => setShowLanguagesDropdown(!showLanguagesDropdown)}
            >
              🌐 <span>{selectedLanguage}</span> ▼
            </div>

            {showLanguagesDropdown && (
              <ul className="dropdown-menu">
                {[
                  "English",
                  "Spanish",
                  "French",
                  "Hindi",
                  "Japanese",
                  "Urdu",
                  "German",
                ].map((lang) => (
                  <li key={lang} onClick={() => handleLanguageSelect(lang)}>
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            {loggedInUser ? (
              <div
                className="aarogya-username"
                onMouseEnter={() => setShowUserOptions(true)}
                onMouseLeave={() => setShowUserOptions(false)}
              >
                {loggedInUser}
                {showUserOptions && (
                  <ul className="user-options">
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                )}
              </div>
            ) : (
              <button
                className="aarogya-login-button"
                onClick={() => setShowAuthForm(true)}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </nav>

      {showAuthForm && (
        <Auth
          closeForm={() => setShowAuthForm(false)}
          setLoggedInUser={setLoggedInUser}
        />
      )}
    </>
  );
};

export default Navbar;
