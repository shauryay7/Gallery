// src/App.js

import React from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

const App = () => {
    const images = [
        { url: 'https://via.placeholder.com/800x400?text=Image+1' },
        { url: 'https://via.placeholder.com/800x400?text=Image+2' },
        { url: 'https://via.placeholder.com/800x400?text=Image+3' },
        { url: 'https://via.placeholder.com/800x400?text=Image+4' },
    ];

    return (
        <div className="App">
            <h1>Image Gallery</h1>
            <ImageGallery images={images} />
        </div>
    );
};

export default App;