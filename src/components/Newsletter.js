import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert('Thank you for subscribing!');
      setEmail('');
      setError('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-heading">Subscribe to Our Newsletter</h2>
        <p className="newsletter-description">
          Stay updated with the latest trends and exclusive offers from WINZI COLLECTION.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="newsletter-input-container">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`newsletter-input ${error ? 'input-error' : ''}`}
              required
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </div>
          {error && <span className="newsletter-error">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Newsletter;