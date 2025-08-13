import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCheckCircle,
  FaBuilding,
  FaLightbulb,
} from 'react-icons/fa';
import './CustomPage.css';
import SectionHeader from '../Components/SectionHeader';

const industryIntegrations = {
  Education: ['SMS', 'Cloud', 'AI Automation'],
  Healthcare: ['SMS', 'Insurance System', 'AI Automation'],
  Finance: ['Cloud', 'AI Automation'],
  Banking: ['SMS', 'Cloud', 'Insurance System'],
  Technology: ['Cloud', 'AI Automation'],
};

const CustomPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedIntegrations, setSelectedIntegrations] = useState([]);

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(industry);
    setSelectedIntegrations([]);
  };

  return (
    <div className="custom-page">
      <SectionHeader
        title="Design Your Custom Ecosystem"
        subtitle="Build a solution that's perfectly tailored to your business needs."
      />

      <main className="container">
        <form
          action="https://formspree.io/f/mzzgnzwl"
          method="POST"
          className="custom-form"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Custom Ecosystem Submission"
          />
          {selectedIndustry && (
            <input type="hidden" name="industry" value={selectedIndustry} />
          )}
          {selectedIntegrations.map((item, idx) => (
            <input
              key={idx}
              type="hidden"
              name="integrations[]"
              value={item}
            />
          ))}

          <section className="form-section">
            <h2>1. Select Your Industry</h2>
            <div className="industry-buttons">
              {Object.keys(industryIntegrations).map((industry) => (
                <button
                  key={industry}
                  type="button"
                  className={`industry-btn ${
                    selectedIndustry === industry ? 'selected' : ''
                  }`}
                  onClick={() => handleIndustryClick(industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
          </section>

          {selectedIndustry && (
            <>
              <section className="form-section">
                <h2>2. Tell Us About Your Business</h2>
                <div className="input-grid">
                  <div className="input-group">
                    <label>
                      <FaBuilding /> Organization Details
                    </label>
                    <textarea
                      name="organizationInfo"
                      placeholder="Describe your organization, its size, and primary functions."
                      rows="5"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label>
                      <FaLightbulb /> Your Vision
                    </label>
                    <textarea
                      name="visionInfo"
                      placeholder="What are the goals and objectives you want to achieve with this solution?"
                      rows="5"
                      required
                    />
                  </div>
                </div>
              </section>

              <section className="form-section">
                <h2>
                  <FaCheckCircle /> 3. Choose Service Integrations
                </h2>
                <div className="checkbox-grid">
                  {industryIntegrations[selectedIndustry].map((service) => (
                    <label key={service} className="checkbox-label">
                      <input
                        type="checkbox"
                        value={service}
                        checked={selectedIntegrations.includes(service)}
                        onChange={(e) => {
                          const { value, checked } = e.target;
                          setSelectedIntegrations((prev) =>
                            checked
                              ? [...prev, value]
                              : prev.filter((item) => item !== value)
                          );
                        }}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </section>
            </>
          )}

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Submit Your Request <FaArrowRight />
            </button>
            <Link to="/prebuilt" className="btn btn-secondary">
              Explore Pre-built Solutions
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CustomPage;
