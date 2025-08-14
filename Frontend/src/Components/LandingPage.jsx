import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Industries from "./Industries";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <main className="container">
        <section className="solutions-overview">
          <h2>Tailored Management Systems for Every Industry</h2>
        </section>

        <section className="features-grid">
          <div className="feature-card">
            <h3>Custom Solutions</h3>
            <p>
              Custom-built systems to address your specific business needs and
              optimize your workflow for enhanced productivity and scalability.
            </p>
            <ul>
              <li>Tailored Workflows</li>
              <li>Scalable Architecture</li>
              <li>Enhanced Productivity</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Pre-built Solutions</h3>
            <p>
              Ready-to-use modules for rapid deployment. Get up and running
              quickly with our cost-effective and industry-specific solutions.
            </p>
            <ul>
              <li>Rapid Deployment</li>
              <li>Cost-Effective</li>
              <li>Industry-Specific</li>
            </ul>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>
            Explore our solutions and find the perfect fit for your business.
          </p>
          <div className="cta-buttons">
            <Link to="/custom" className="btn btn-primary">
              Build a Custom Solution
            </Link>
            <Link to="/prebuilt" className="btn btn-secondary">
              Explore Pre-built Options
            </Link>
          </div>
        </section>
      </main>
      <Industries />
    </div>
  );
};

export default LandingPage;
