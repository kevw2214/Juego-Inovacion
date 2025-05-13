// src/pages/WelcomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/animation.css';
import logo from '../logo.jpeg';  // <-- Importa el logo

const WelcomePage = () => {
  const nav = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light position-relative overflow-hidden">
      
      {/* Esfera decorativa con el logo */}
      <div
        className="logo-sphere position-absolute"
        style={{
          top: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
 
          zIndex: 1,
        }}
      />

      {/* Título principal */}
      <h1 className="display-1 mb-4  welcome-title position-relative z-2">
        ¡Comienza el juego!
      </h1>

      {/* Botón de acción */}
      <button
  className="custom-btn mt-3 position-relative z-2"
  onClick={() => nav('/brands')}
>
  Jugar ahora
</button>
    </div>
  );
};

export default WelcomePage;