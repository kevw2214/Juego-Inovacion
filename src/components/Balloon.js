import React from 'react';
import '../styles/animation.css';

const COLOR_MAP = {
  FEDEX: '#6A0DAD',
  SAMSUNG: '#1DB954',
  DHL: '#FF8800',
  PEPSICO: '#1428A0',
  'GAS MONKEY GARAGE': '#F40009',
};

const Balloon = ({ id, brand, onPop, isPopped, x, delay, duration }) => {
  if (isPopped) return null;

  return (
    <div
      className="balloon"
      style={{
        left: `${x}%`,
        backgroundColor: COLOR_MAP[brand] || '#666',
        color: COLOR_MAP[brand] || '#666', 
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