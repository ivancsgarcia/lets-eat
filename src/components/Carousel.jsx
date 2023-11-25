import React, { useState } from "react";
import "../css/carousel.css";

function Carousel({ carousel_images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carousel_images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carousel_images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="handlePrev">
        &lt; Prev
      </button>
      <img
        src={carousel_images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
      />
      <button onClick={handleNext} className="handleNext">
        Next &gt;
      </button>
    </div>
  );
}

export default Carousel;
