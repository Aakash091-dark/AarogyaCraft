import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
    // Handle form submission logic here
  };

  return (
    <div className="contact-container">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have a question or want to work together? Fill out the form, and
              we'll get back to you as soon as possible.
            </p>
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Craft Lane, Innovation City, 45678</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>hello@aarogyacraft.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
