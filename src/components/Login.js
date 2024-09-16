import React from 'react';
import './Login.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: 'url(/Assets/login-background.jpeg)', // Use a direct path from the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="login-container">
        <div className="login-logo">
          <img src="/Assets/logo.jpeg" alt="WINZI COLLECTION Logo" /> {/* Path to logo */}
        </div>
        <Form className="login-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Log In
          </Button>
          <p className="login-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
