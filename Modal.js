// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={image} alt="" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
