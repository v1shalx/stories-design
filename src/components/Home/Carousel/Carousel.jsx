import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Carousel.css';

const images = [
  'https://storiesdesignstudio.com/wp-content/uploads/2023/01/001-1920x780.jpg',
  'https://storiesdesignstudio.com/wp-content/uploads/2023/01/003-1920x780.jpg',
  'https://storiesdesignstudio.com/wp-content/uploads/2023/01/002-1920x780.jpg',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    // Automatically slide images every 3 seconds
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <AnimatePresence exitBeforeEnter={false}>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="carousel-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }} // Adjust duration and ease
            exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }} // Adjust duration and ease
          />
        </AnimatePresence>

        <button onClick={handlePrev} className="arrow left-arrow">
          &#8249;
        </button>
        <button onClick={handleNext} className="arrow right-arrow">
          &#8250;
        </button>
      </div>

      <div className="dot-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

