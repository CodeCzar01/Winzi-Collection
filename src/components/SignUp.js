import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `url(/Assets/signup-bg.jpeg)`, // Use direct path from the public folder for the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="signup-content">
        <img src="/Assets/logo.jpeg" alt="WINZI COLLECTION Logo" className="signup-logo" /> {/* Path to logo */}
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Full Name" className="form-control" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" className="form-control" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone Number" className="form-control" /> {/* New Phone Number Field */}
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" className="form-control" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" className="form-control" /> {/* New Confirm Password Field */}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Create Account</button>
          </div>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
