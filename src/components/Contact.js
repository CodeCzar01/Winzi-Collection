import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-paragraph">We'd love to hear from you! Please fill out the form below and we'll get in touch as soon as possible.</p>
      
      <div className="contact-container">
        <div className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" />
          <input type="email" placeholder="Your Email" className="contact-input" />
          <textarea placeholder="Your Message" className="contact-textarea"></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </div>
        
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: info@winzi.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: 123 Fashion Street, City</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
