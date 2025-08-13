import React from 'react';
import './OurServices.css';
import SectionHeader from '../Components/SectionHeader';

const OurServices = () => {
  return (
    <div className="services-page">
      <SectionHeader
        title="Our Services"
        subtitle="Flexible, scalable, and innovative solutions designed for your success."
      />

      <main className="container">
        <section className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Custom Cloud Solutions</h3>
            <p>
              Tailored development to meet your unique business needs. We build
              scalable, cost-effective solutions with end-to-end support to
              ensure seamless integration and optimal performance.
            </p>
            <ul>
              <li>Personalized Service Plans</li>
              <li>Workflow Integration</li>
              <li>Scalable Architecture</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-building"></i>
            </div>
            <h3>Prebuilt Industry Solutions</h3>
            <p>
              Ready-to-deploy platforms for various sectors, including
              healthcare, education, and finance. Our prebuilt solutions are
              designed to address industry-specific challenges and accelerate
              your time-to-market.
            </p>
            <ul>
              <li>Industry-Specific Modules</li>
              <li>Rapid Deployment</li>
              <li>Proven Performance</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <h3>Cloud Migration & Modernization</h3>
            <p>
              Seamlessly migrate your existing applications and infrastructure
              to the cloud. We help you modernize your legacy systems to improve
              efficiency, security, and scalability.
            </p>
            <ul>
              <li>Legacy System Upgrades</li>
              <li>Data Migration</li>
              <li>Infrastructure Optimization</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Managed Cloud Services</h3>
            <p>
              Focus on your core business while we manage your cloud
              environment. Our team provides 24/7 monitoring, support, and
              optimization to ensure your cloud infrastructure is always
              running at its best.
            </p>
            <ul>
              <li>24/7 Monitoring & Support</li>
              <li>Performance Optimization</li>
              <li>Security Management</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurServices;
