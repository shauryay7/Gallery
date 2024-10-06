// src/components/ImageGallery.js

import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageGallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    return (
        <div className="gallery-container">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

            {images.map((image, index) => (
                <div
                    className={index === currentIndex ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === currentIndex && (
                        <img src={image.url} alt="gallery" className="image" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;