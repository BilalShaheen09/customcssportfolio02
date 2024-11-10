import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import "../css-files/contact.css";

const ContactPage: React.FC = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-description">We would love to hear from you. Get in touch for inquiries, collaborations, or just a friendly chat!</p>

        <form className="contact-form">
          <div className="form-group">
            <FaUser className="form-icon" />
            <input type="text" placeholder="Your Name" className="form-input" required />
          </div>

          <div className="form-group">
            <FaEnvelope className="form-icon" />
            <input type="email" placeholder="Your Email" className="form-input" required />
          </div>

          <div className="form-group">
            <FaPhone className="form-icon" />
            <input type="tel" placeholder="Your Phone" className="form-input" required />
          </div>

          <div className="form-group">
            <textarea placeholder="Your Message" className="form-textarea" required></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send <FaPaperPlane className="submit-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
