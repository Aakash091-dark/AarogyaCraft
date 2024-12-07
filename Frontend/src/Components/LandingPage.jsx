import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./LandingPage.css";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <Router>

      <div className="landing-page">
        {/* Navbar is always visible */}

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/prebuilt" element={<Prebuilt />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="home">
    {/* Hero Section */}
    <div className="hero">
      <Hero />
    </div>

    {/* Solutions Section */}
    <div className="solutions">
      <h1>
        <span>Tailored Management Systems</span>
        <span className="line2">for Every Industry</span>
      </h1>
      <p>
        <span>
          Discover our innovative management systems designed to streamline
          operations across various
        </span>
        <span>
          sectors. Whether you need a custom solution or a pre-built option, we
          have you covered.
        </span>
      </p>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <h2>Custom Solutions Tailored to Your Needs</h2>
          <p>
            Our custom solutions are crafted to meet the unique requirements of
            your industry.
          </p>
        </div>
        <div className="feature">
          <h2>Pre-built Solutions for Quick Implementation</h2>
          <p>
            Choose from our pre-built systems for fast deployment and ease of
            use.
          </p>
        </div>
        <div className="feature">
          <h2>Explore Our Diverse Industry Offerings</h2>
          <p>
            We cater to various industries, ensuring tailored functionality.
          </p>
        </div>
      </div>
      {/* Button Links */}
      <div className="buttons">
        <Link to="/custom" className="btn custom-btn">
          Custom
        </Link>
        <Link to="/prebuilt" className="btn prebuilt-btn">
          Pre-built
        </Link>
      </div>
    </div>
  </div>
);

const Custom = () => (
  <div className="page">

    <h1>Custom Solutions</h1>
    <p>
      Here you can explore custom solutions tailored to your industry needs.
    </p>
    <Link to="/" className="btn">
      Back to Home
    </Link>
  </div>
);

const Prebuilt = () => (
  <div className="page">
    <h1>Pre-built Solutions</h1>
    <p>Here you can explore pre-built solutions for quick deployment.</p>
    <Link to="/" className="btn">
      Back to Home
    </Link>
  </div>
);

export default LandingPage;