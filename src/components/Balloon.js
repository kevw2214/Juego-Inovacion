// src/components/Balloon.js
import React from 'react';
import '../styles/animation.css';

const COLOR_MAP = {
  Tesla: '#E82127',
  IKEA: '#1DB954',
  DHL: '#FF8800',
  Bimbo: '#1428A0',
  Siemens: '#F40009',
  Microsoft: '#00A4EF',
};

/**
 * Balloon component without label text.
 * Props:
 * - id: unique identifier
 * - brand: string to pick color
 * - onPop: callback when clicked
 * - isPopped: boolean to hide popped balloons
 * - x: horizontal position in %
 */
const Balloon = ({ id, brand, onPop, isPopped, x, delay, duration }) => {
  if (isPopped) return null;

  return (
    <div
      className="balloon"
      style={{
        left: `${x}%`,
        backgroundColor: COLOR_MAP[brand] || '#666',
        animation: `rise ${duration}s infinite`,
        animationDelay: `${delay}s`,
      }}
      onClick={() => onPop(id)}
    >
      <div className="balloon-string" />
    </div>
  );
};

export default Balloon;