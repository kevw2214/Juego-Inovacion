import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/animation.css';

const Header = () => (
  <nav className="navbar navbar-expand-lg bg">
  <div className="container">
    <Link className="navbar-brand fs-1" to="/">Explota globos!!!</Link> {/* fs-3 aumenta el tamaño */}
    <div>
      <Link className="btn btn-outline me-2 fs-3" to="/brands">Jugar</Link>
      <Link className="btn btn-outline Boton fs-3" to="/summary">Historial</Link>
    </div>
  </div>
</nav>
);

export default Header;
