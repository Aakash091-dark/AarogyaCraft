import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="policy-page">
      {/* Header Card */}
      <div className="heading">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Last updated: August 13, 2025</p>
        </div>
      </div>

      {/* Terms Content */}
      <main className="container policy-content">
        <div className="term-card">
          <h2>1. Introduction</h2>
          <p>
            Welcome to AarogyaCraft. These Terms and Conditions govern your use
            of our website and services. By accessing or using our services, you
            agree to be bound by these terms.
          </p>
        </div>

        <div className="term-card">
          <h2>2. Use of Our Services</h2>
          <p>
            You may use our services only as permitted by law. We may suspend or
            stop providing our services to you if you do not comply with our
            terms or policies.
          </p>
          <ul>
            <li>You must be at least 18 years old to use our services.</li>
            <li>
              You are responsible for safeguarding your account information.
            </li>
          </ul>
        </div>

        <div className="term-card">
          <h2>3. Intellectual Property</h2>
          <p>
            All content and materials available on our website, including but
            not limited to text, graphics, logos, and software, are the property
            of AarogyaCraft and are protected by applicable intellectual
            property laws.
          </p>
        </div>

        <div className="term-card">
          <h2>4. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, AarogyaCraft shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues.
          </p>
        </div>

        <div className="term-card">
          <h2>5. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. We will post the most current
            version of these terms on our website. By continuing to use our
            services, you agree to be bound by the revised terms.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Terms;
