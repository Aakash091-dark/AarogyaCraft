import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./Hero";
import "./LandingPage.css"; // Ensure this file includes the relevant CSS
// import CustomButtons from "../Pages/CustomButton";
// import PrebuiltButtons from "../Pages/PrebuiltButton";
import PrebuiltButtons from "./PrebuiltButtons";
import CustomButtons from "./CustomButtons";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom" element={<CustomButtons/>} />
        <Route path="/prebuilt" element={<PrebuiltButtons />} />
        <Route path="/Custom" element={<Custom />} />
        <Route path="/Prebuilt" element={<Prebuilt />} />
      </Routes>
    </div>
import CustomButtons from "../Pages/CustomButton";
import PrebuiltButtons from "../Pages/PrebuiltButton";

const LandingPage = () => {
  return (
    <Router>
      <div className="landing-page">
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/custom" element={<CustomButtons />} />
          <Route path="/prebuilt" element={<PrebuiltButtons />} /> */}
          {/* <Route path="/" element={<Custom />} />
          <Route path="/" element={<Prebuilt />} /> */}


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


    <div className="solutions">
      <h1>
        <span>Tailored Management Systems</span>
        {/* <span className="line2">for Every Industry</span> */}
      </h1>
      <p>
        <span><b>
          Discover our innovative management systems designed to streamline
          operations across various.</b>
        </span>
        <span><b>
          sectors. Whether you need a custom solution or a pre-built option, we
          have you covered.</b>
        </span>
      </p>
      {/* Features Section */} 
          <div className="features">
       <div className="feature">
        <h2>Custom Solutions Tailored to Your Needs</h2>
          <p>
            <ul>
              <li>
                <strong>Tailored Solutions:</strong> Custom-built systems to
                address your specific business needs.
              </li>
              <li>
                <strong>Workflow Optimization:</strong> Simplify operations and
                eliminate inefficiencies.
              </li>
              <li>
                <strong>Enhanced Productivity:</strong> Boost output with
                innovative, user-friendly tools.
              </li>
              <li>
                <strong>Scalable Design:</strong> Solutions that grow with your
                business.
              </li>
              <li>
                <strong>Cost Efficiency:</strong> Save time and resources with
                automation.
              </li>
            </ul>
          </p>
        </div>
        <div className="feature">
          <h2>Pre-built Solutions for Quick Implementation</h2>
          <p>
            <ul>
              <li>
                <strong>Ready-to-Use Modules:</strong> Pre-designed solutions
                for rapid deployment.
              </li>
              <li>
                <strong>Quick Setup:</strong> Save time with hassle-free
                implementation.
              </li>
              <li>
                <strong>Cost-Effective:</strong> Affordable solutions without
                compromising quality.
              </li>
              <li>
                <strong>Scalable Design:</strong> Easily expandable as your
                business grows.
              </li>
              <li>
                <strong>Industry-Specific:</strong> Tailored for diverse sectors
                and needs.
              </li>
            </ul>
          </p>
        </div>
        <div className="feature">
          <h2>Explore Our Diverse Industry Offerings</h2>
          <p>
            <ul>
              <li>
                <strong>Healthcare Solutions:</strong> Streamlined management
                for hospitals and clinics.
              </li>
              <li>
                <strong>Education Systems:</strong> Enhanced tools for schools
                and universities.
              </li>
              <li>
                <strong>Retail Platforms:</strong> Efficient inventory and sales
                tracking.
              </li>
              <li>
                <strong>Manufacturing Tools:</strong> Simplified production and
                supply chain management.
              </li>
              <li>
                <strong>Finance Services:</strong> Secure and automated
                processes.
              </li>
            </ul>
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
    <Link to="/" className="buttons">
      Back to Home
    </Link>
  </div>
);

const Prebuilt = () => (
  <div className="page">
    <h1>Pre-built Solutions</h1>
    <p>Here you can explore pre-built solutions for quick deployment.</p>
    <Link to="/" className="buttons">
      Back to Home
    </Link>
  </div>
);

// const Custom = () => (
//   <div className="page">
//     <h1>Custom Solutions</h1>
//     <p>
//       Here you can explore custom solutions tailored to your industry needs.
//     </p>
//     <Link to="/" className="btn">
//       Back to Home
//     </Link>
//   </div>
// );

// const Prebuilt = () => (
//   <div className="page">
//     <h1>Pre-built Solutions</h1>
//     <p>Here you can explore pre-built solutions for quick deployment.</p>
//     <Link to="/" className="btn">
//       Back to Home
//     </Link>
//   </div>
// );

export default LandingPage;

