import React, { useState } from 'react';
import './ImageCarousel.css';
import image1 from './assets/53206197369_6848e7f678_k.jpg';
import image2 from './assets/53349534194_2d4e8b78bb_k.jpg';
import image3 from './assets/53349534039_b28cbb8205_k.jpg';
import image4 from './assets/53349533924_d14e0f0c40_k.jpg';
import image5 from './assets/53349444683_6f2f608329_k.jpg';
import image6 from './assets/53349212926_cd02092fb4_k.jpg';




const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button prev">&lt;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      <button onClick={nextSlide} className="carousel-button next">&gt;</button>
    </div>
  );
};

export default ImageCarousel;