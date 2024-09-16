import React, { useRef, useState } from 'react';
import './BlogSection.css';
import { FaThumbsUp, FaShareAlt } from 'react-icons/fa';

const BlogSection = () => {
  const carouselRef = useRef(null);
  const [likes, setLikes] = useState(Array(6).fill(0)); // Initial likes set to 0 for each video

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const handleShare = (title, url) => {
    const shareData = {
      title: title,
      text: `Check out this video: ${title}`,
      url: url,
    };
    if (navigator.share) {
      navigator.share(shareData).catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Share not supported on this browser.');
    }
  };

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

  const blogs = [
    {
      title: "Latest Fashion Trends",
      content: "Top 5 Essential Wardrobe Pieces Every Man Needs in 2024.",
      video: "./Assets/fashion1.mp4", // Replacing image with video
      url: "https://example.com/video1", // Link for sharing
    },
    {
      title: "How to Style Casuals",
      content: "The Art of Tailoring: How We Craft Our Signature Suits.",
      video: "./Assets/fashion2.mp4",
      url: "https://example.com/video2",
    },
    {
      title: "Choosing the Right Fabrics",
      content: "Choosing the right fabrics is key to comfort and style.",
      video: "./Assets/fashion3.mp4",
      url: "https://example.com/video3",
    },
    {
      title: "Accessorizing for Men",
      content: "Learn how to complement your outfits with the right accessories.",
      video: "./Assets/fashion4.mp4",
      url: "https://example.com/video4",
    },
    {
      title: "Latest Fashion Trends",
      content: "The Statement Jacket: Elevating Your Outfit with Bold Outerwear.",
      video: "./Assets/fashion5.mp4",
      url: "https://example.com/video5",
    },
    {
      title: "Latest Fashion Trends",
      content: "How [Influencer Name] Styles the Winzi Collection for Every Occasion.",
      video: "./Assets/fashion6.mp4",
      url: "https://example.com/video6",
    },
  ];

  return (
    <section className="blog-section">
      <h2 className="blog-heading">From Our Blog</h2>
      <div className="blog-carousel" ref={carouselRef}>
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="blog-video-container">
              <video src={blog.video} controls className="blog-video" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-text">{blog.content}</p>
              <div className="blog-actions">
                <button className="like-btn" onClick={() => handleLike(index)}>
                  <FaThumbsUp /> {likes[index]} Likes
                </button>
                <button className="share-btn" onClick={() => handleShare(blog.title, blog.url)}>
                  <FaShareAlt /> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={handlePrev}>‹</button>
      <button className="carousel-control next" onClick={handleNext}>›</button>
    </section>
  );
};

export default BlogSection;
