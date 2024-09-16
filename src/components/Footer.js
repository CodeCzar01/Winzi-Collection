import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="text-center text-md-left">
          {/* About Section */}
          <Col md={4} sm={12} className="footer-about">
            <h5>About WINZI COLLECTION</h5>
            <p>We offer the best fashion for men, with styles that reflect quality and uniqueness.</p>
          </Col>

          {/* Links Section */}
          <Col md={4} sm={6} className="footer-links">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col md={4} sm={6} className="footer-social">
            <h5>Follow Us</h5>
            <ul className="social-links list-unstyled d-flex justify-content-center">
              <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://instagram.com"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://twitter.com"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>&copy; 2024 WINZI COLLECTION. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
