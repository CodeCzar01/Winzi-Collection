import React, { useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      name: "John Doe",
      review: "WINZI COLLECTION is amazing! The quality and design are top-notch.",
      image: "./Assets/user1.jpeg",
    },
    {
      name: "Jane Smith",
      review: "Absolutely love my purchase. Great service and stylish products.",
      image: "./Assets/user2.jpeg",
    },
    {
      name: "Alex Johnson",
      review: "Best fashion brand I've come across. Will definitely shop again!",
      image: "./Assets/user3.jpeg",
    },
    {
      name: "Emily Davis",
      review: "Unique designs and great fit. Highly recommend WINZI COLLECTION.",
      image: "./Assets/user4.jpeg",
    },
    {
      name: "Michael Brown",
      review: "Awesome shopping experience. The materials are high-quality.",
      image: "./Assets/user5.jpeg",
    },
  ];

  return (
    <div className="testimonial-page">
      <h2 className="testimonial-heading">What Our Customers Say</h2>
      <div ref={carouselRef} className="testimonial-carousel">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-image-container">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-review">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={handlePrev}>‹</button>
      <button className="carousel-control next" onClick={handleNext}>›</button>
    </div>
  );
};

export default Testimonials;
