import React, { useState } from "react";
import {
  FaArrowRight,
  FaBuilding,
  FaLightbulb,
  FaMoneyBillWave,
  FaEnvelope,
} from "react-icons/fa";
import "./CustomPage.css";
import SectionHeader from "../Components/SectionHeader";

const integrationsByLevel = {
  "Business Essentials": [
    "Google Workspace / Microsoft 365",
    "Stripe / Razorpay / PayPal",
    "Zoho Mail / Outlook",
    "Slack / Microsoft Teams",
  ],
  "Growth Stage": [
    "CRM Integrations: Salesforce, Zoho CRM, HubSpot",
    "HR & Payroll: GreytHR, Darwinbox, BambooHR",
    "Marketing Tools: Mailchimp, WhatsApp Business API, Twilio SMS",
    "ERP/Inventory: Tally, QuickBooks, Odoo ERP",
  ],
  "Enterprise Level": [
    "BI & Analytics: Power BI, Tableau, Looker Studio",
    "Predictive ML Models: Sales forecasting, anomaly detection",
    "Accounting & POS: SAP, Oracle Netsuite, Zoho Books",
    "Multi-Location Sync: Cloud POS, Franchise management",
  ],
  "Fully Automated AI": [
    "AI Assistant: Voice + Chat for staff & customer support",
    "IoT Integrations: Smart sensors, patient vitals, smart devices",
    "RPA (Robotic Process Automation): Auto data entry, invoice processing",
    "AI Security & Compliance: Threat detection, GDPR/ISO compliance",
    "Custom APIs: Real-time integration with any external platform",
  ],
};

const industries = [
  "Healthcare",
  "Retail",
  "Education",
  "Finance",
  "Technology",
];

const CustomPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedIntegrations, setSelectedIntegrations] = useState([]);
  const [userCount, setUserCount] = useState(10);

  const handleIntegrationChange = (integration) => {
    setSelectedIntegrations((prev) =>
      prev.includes(integration)
        ? prev.filter((item) => item !== integration)
        : [...prev, integration]
    );
  };

  const calculatePrice = () => {
    const baseIntegrationCost = 1500;
    const perUserCost = 100;
    const totalIntegrationCost =
      selectedIntegrations.length * baseIntegrationCost;
    const totalUserCost = userCount * perUserCost;
    return totalIntegrationCost + totalUserCost;
  };

  return (
    <div className="custom-page">
      <SectionHeader
        title="Create Your Custom Integration Stack"
        subtitle="Select your industry and choose the integrations that fit your business needs."
      />

      <main className="container">
        <form
          action="https://formspree.io/f/mzzgnzwl"
          method="POST"
          className="custom-form"
        >
          {/* Hidden fields for submission */}
          <input
            type="hidden"
            name="_subject"
            value="New Custom Integration Proposal"
          />
          <input type="hidden" name="industry" value={selectedIndustry} />
          <input type="hidden" name="user_count" value={userCount} />
          <input
            type="hidden"
            name="integrations"
            value={selectedIntegrations.join(", ")}
          />
          <input
            type="hidden"
            name="estimated_price"
            value={`₹${calculatePrice().toLocaleString()}`}
          />

          {/* Step 1: Industry Selection */}
          <section className="form-section">
            <h2>Step 1: Select Your Industry</h2>
            <div className="input-group">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="industry-dropdown"
                required
              >
                <option value="" disabled>
                  -- Choose an Industry --
                </option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </section>

          {/* Step 2: Integrations Checklist */}
          {selectedIndustry && (
            <section className="form-section">
              <h2>Step 2: Choose Your Integrations</h2>
              {Object.entries(integrationsByLevel).map(
                ([level, integrations]) => (
                  <div key={level} className="integration-category">
                    <h3>{level}</h3>
                    <div className="checkbox-grid">
                      {integrations.map((integration) => (
                        <label key={integration} className="checkbox-label">
                          <input
                            type="checkbox"
                            value={integration}
                            checked={selectedIntegrations.includes(integration)}
                            onChange={() =>
                              handleIntegrationChange(integration)
                            }
                          />
                          <span>{integration}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )
              )}
            </section>
          )}

          {/* Step 3: Business Details */}
          {selectedIndustry && (
            <section className="form-section">
              <h2>Step 3: Tell Us About Your Business</h2>
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
                    placeholder="What goals do you want to achieve with this solution?"
                    rows="5"
                    required
                  />
                </div>
              </div>
            </section>
          )}

          {/* Step 4: Contact Information */}
          {selectedIndustry && (
            <section className="form-section">
              <h2>Step 4: Contact Information</h2>
              <div className="input-group">
                <label htmlFor="email">
                  <FaEnvelope /> Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="email-input"
                />
              </div>
            </section>
          )}

          {/* Step 5: Pricing and User Count */}
          {selectedIndustry && (
            <section className="form-section">
              <h2>Step 5: Estimate Your Pricing</h2>
              <div className="pricing-calculator">
                <div className="input-group">
                  <label htmlFor="userCount">
                    Number of Users: {userCount}
                  </label>
                  <input
                    type="range"
                    id="userCount"
                    name="userCount"
                    min="1"
                    max="500"
                    value={userCount}
                    onChange={(e) => setUserCount(parseInt(e.target.value, 10))}
                    className="user-slider"
                  />
                </div>
                <div className="summary-card">
                  <p className="price-estimate">
                    <FaMoneyBillWave /> Estimated Monthly Cost:{" "}
                    <strong>₹{calculatePrice().toLocaleString()}</strong>
                  </p>
                  <p>
                    <span className="label-blue">Selected Integrations:</span>{" "}
                    <span className="count-label">
                      {selectedIntegrations.length}
                    </span>
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Step 6: Custom Proposal CTA */}
          {selectedIndustry && selectedIntegrations.length > 0 && (
            <section className="form-section cta-section">
              <h2>Step 6: Get a Custom Proposal</h2>
              <p>
                Ready to move forward? Submit your selections, and our team will
                get back to you with a detailed proposal.
              </p>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Request a Custom Proposal <FaArrowRight />
                </button>
              </div>
            </section>
          )}
        </form>
      </main>
    </div>
  );
};

export default CustomPage;
