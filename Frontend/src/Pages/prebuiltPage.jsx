import React from "react";
import { Link } from "react-router-dom";
import "./prebuiltPage.css";

const plans = [
  {
    name: "Basic",
    price: "4999",
    features: [
      "Up to 5 Users",
      "1–2 Essential Modules",
      "Basic KPIs Dashboard",
      "Default Branding",
      "Email + Basic Payment",
      "SSL Security & Weekly Backups",
      "Email/Chat Support (48hr)",
    ],
    highlight: false,
  },
  {
    name: "Intermediate",
    price: "9999",
    features: [
      "Up to 20 Users",
      "4–5 Prebuilt Modules",
      "Advanced KPIs + Export",
      "Custom Logo & Theme",
      "Email, SMS, Multi-Gateway Payments",
      "Daily Backups & Activity Logs",
      "Priority Support (24hr)",
    ],
    highlight: true,
  },
  {
    name: "Advanced",
    price: "24999",
    features: [
      "Unlimited Users",
      "All Prebuilt + 1–2 Semi-Custom Modules",
      "BI Dashboards + Predictive Analytics",
      "Multi-Location Branding",
      "ERP, POS, Accounting, API Access",
      "2FA, Audit Logs, Compliance Ready",
      "Priority Support with Escalation",
    ],
    highlight: false,
  },
  {
    name: "Fully Automated",
    price: "75000",
    features: [
      "Unlimited Users",
      "Fully Custom AI Modules",
      "AI-Powered Insights + Voice Assistant",
      "Multi-Language, Fully Customizable",
      "RPA + IoT + Real-Time APIs",
      "AI Threat Detection, Auto Compliance",
      "Dedicated Account Manager",
    ],
    highlight: false,
  },
];

const PrebuiltPage = () => {
  return ( 
    <section className="pricing-section">
      <div className="section-header">
      <h2 className="section-title">
        🚀 Choose the Right Plan for Your Growth
      </h2>
      <p className="section-subtitle">
        Flexible pricing that scales with your business
      </p>
      </div>
      {/* Wrapper card containing all pricing cards */}
      <div className="pricing-card-wrapper">
        <div className="pricing-wrapper">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            >
              {plan.highlight && (
                <span className="popular-badge">⭐ Most Popular</span>
              )}
              <h3 className="plan-title">{plan.name}</h3>
              <p className="plan-price">₹{plan.price} / month</p>
              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to={`/payment/${plan.price}`} className="cta-btn">
                {plan.highlight ? "Start with Intermediate" : "Get Started"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrebuiltPage;
