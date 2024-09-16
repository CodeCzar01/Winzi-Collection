import React from 'react';
import { Carousel, Button, Form, FormControl } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/home.jpeg"
            alt="First slide"
          />
          <div className="overlay-wrapper">
            <div className="content-container">
              {/* Search Bar */}
              <Form className="d-flex search-form">
                <FormControl
                  type="search"
                  placeholder="Search for products..."
                  className="me-2"
                />
                <Button className="search-button" variant="outline-light">Search</Button>
              </Form>

              {/* Caption below search */}
              <div className="custom-caption">
                <h3>Discover the Latest Fashion</h3>
                <p>Shop the newest trends at WINZI COLLECTION</p>
                <Button className='btn-primary' href="#shop">Shop Now</Button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/home2.jpeg"
            alt="Second slide"
          />
          <div className="overlay-wrapper">
            <div className="content-container">
              {/* Search Bar */}
              <Form className="d-flex search-form">
                <FormControl
                  type="search"
                  placeholder="Search for products..."
                  className="me-2"
                />
                <Button className="search-button" variant="outline-light">Search</Button>
              </Form>

              {/* Caption below search */}
              <div className="custom-caption">
                <h3>Exclusive Styles for Men</h3>
                <p>Look sharp, feel great</p>
                <Button className='btn-primary' href="#shop">Explore Now</Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
