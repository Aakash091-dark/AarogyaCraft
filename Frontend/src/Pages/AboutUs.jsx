import React from 'react';
import './AboutUs.css';
import SectionHeader from '../Components/SectionHeader';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <SectionHeader
        title="About AarogyaCraft"
        subtitle="Revolutionizing business operations with innovative cloud solutions."
      />

      <main className="container">
        <section className="about-section">
          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              Founded in 2024, AarogyaCraft is a team of technology
              enthusiasts, problem-solvers, and innovators dedicated to
              simplifying cloud adoption. We design intelligent, secure, and
              scalable solutions that empower businesses to thrive in a
              digital-first world.
            </p>
          </div>
        </section>

        <section className="mission-vision-section">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To redefine how businesses operate and grow by providing
              intelligent, scalable, and adaptive cloud solutions that drive
              efficiency and innovation.
            </p>
          </div>
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>
              To become a global leader in cloud services by setting new
              standards, building smart ecosystems, and inspiring
              sustainability.
            </p>
          </div>
        </section>

        <section className="why-choose-us-section">
          <h2>Why Choose Us?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <h4>Customer-Centric</h4>
              <p>
                Our clients are at the heart of everything we do. We build
                partnerships based on trust and a deep understanding of your
                needs.
              </p>
            </div>
            <div className="reason-card">
              <h4>Innovation-Driven</h4>
              <p>
                We are committed to continuous innovation, leveraging the
                latest technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="reason-card">
              <h4>Scalable & Secure</h4>
              <p>
                Our solutions are built to grow with your business, with
                security as a top priority to protect your valuable data.
              </p>
            </div>
            <div className="reason-card">
              <h4>Industry Expertise</h4>
              <p>
                We have a deep understanding of various industries, allowing us
                to provide tailored solutions that deliver real results.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
