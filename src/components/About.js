import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import './About.css';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle content

  const handleReadMore = () => {
    setIsExpanded(!isExpanded); // Toggle between true/false
  };

  return (
    <div className="about-page">
      <Container className="about-container mt-5">
        <Card className="about-card shadow-lg p-4">
          <Card.Body>
            <h2 className="about-header text-center mb-4">About Us</h2>
            <Row className="align-items-center">
              <Col md={6}>
                <p>
                  WINZI COLLECTION is a fashion brand committed to providing stylish, high-quality apparel for men.
                  Our collection features the latest trends, exclusive styles, and timeless pieces designed to make every man
                  feel confident and fashionable.
                </p>
                <p>
                  At WINZI COLLECTION, we believe that style should be accessible and that every man deserves to look his best.
                  We are passionate about blending comfort with style, ensuring that every piece is made with the finest materials
                  and attention to detail.
                </p>
                {/* Conditionally render more content based on isExpanded */}
                {isExpanded && (
                  <p>
                    Our designs are carefully curated to reflect modern aesthetics while ensuring comfort and practicality.
                    Whether you're looking for casual wear or formal attire, WINZI COLLECTION has something for everyone. 
                    We take pride in offering excellent customer service and a seamless shopping experience, because looking good 
                    should always be easy.
                  </p>
                )}
                <Button variant="dark" className="read-more-btn mt-3" onClick={handleReadMore}>
                  {isExpanded ? 'Show Less' : 'Read More'}
                </Button>
              </Col>
              <Col md={6}>
                <Image src="/Assets/about.jpeg" fluid className="about-image" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default About;
