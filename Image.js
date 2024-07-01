// src/components/Image.js
import React from 'react';
import './Image.css';

const Image = ({ src, onClick }) => {
  return (
    <div className="image-container" onClick={onClick}>
      <img src={src} alt="" className="image" />
    </div>
  );
};

export default Image;
