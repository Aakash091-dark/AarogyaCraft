import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-container">
      {/* About Us Card */}
      <div className="about-us-card">
        <h2>About Us</h2>
        <p>
          At [Your Company Name], we are revolutionizing how businesses embrace cloud technology. Since our founding in [Year of Establishment], we have been committed to empowering organizations with innovative, secure, and scalable solutions that align with their unique goals and industry challenges.
        </p>
      </div>

      {/* Who We Are Card */}
      <div className="about-us-card">
        <h2>Who We Are</h2>
        <p>
          We are a team of technology enthusiasts, problem-solvers, and innovators dedicated to simplifying cloud adoption for businesses of all sizes. Our expertise lies in designing solutions that not only address today’s needs but also anticipate the challenges of tomorrow.
        </p>
      </div>

      {/* Our Mission Card */}
      <div className="about-us-card">
        <h2>Our Mission</h2>
        <p>
          To redefine the way businesses operate and grow by providing intelligent, scalable, and adaptive cloud solutions.
        </p>
      </div>

      {/* Our Vision Card */}
      <div className="about-us-card">
        <h2>Our Vision</h2>
        <p>
          To become a global leader in cloud services by setting new standards, building smart ecosystems, and inspiring sustainability.
        </p>
      </div>

      {/* Why Choose Us Card */}
      <div className="about-us-card">
        <h2>Why Choose Us?</h2>
        <p>
          Customer-centric approach, innovation at the core, scalable & secure solutions, and industry expertise make us stand out.
        </p>
      </div>

      {/* Our Journey So Far Card */}
      <div className="about-us-card">
        <h2>Our Journey So Far</h2>
        <p>
          At [Your Company Name], our story is just beginning, but our ambitions are limitless.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;