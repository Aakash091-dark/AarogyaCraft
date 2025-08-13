import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <header className="policy-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: August 13, 2025</p>
        </div>
      </header>

      <main className="container policy-content">
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            create an account, fill out a form, or communicate with us. We may
            also collect information automatically as you navigate our services.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, as well as to develop new ones. We may also use your
            information to communicate with you about products, services,
            offers, and events.
          </p>
        </section>

        <section>
          <h2>3. Sharing of Information</h2>
          <p>
            We do not share your personal information with third parties except
            as described in this Privacy Policy. We may share information with
            vendors, consultants, and other service providers who need access to
            such information to carry out work on our behalf.
          </p>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you
            from loss, theft, misuse, and unauthorized access, disclosure,
            alteration, and destruction.
          </p>
        </section>

        <section>
          <h2>5. Your Choices</h2>
          <p>
            You may update, correct, or delete your account information at any
            time by logging into your account. You may also opt out of receiving
            promotional communications from us by following the instructions in
            those communications.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
