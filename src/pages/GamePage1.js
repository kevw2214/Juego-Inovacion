import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Balloon from '../components/Balloon';
import BalloonModal from '../components/BalloonModal';
import { brands } from '../data/brands';

const GamePage1 = ({ usedBrands, setSelectedBrand }) => {
  const [used, setUsed] = useState(usedBrands);
  const [modal, setModal] = useState({ show: false, title: '' });
  const navigate = useNavigate();

  const handlePop = (id) => {
    const brand = brands.find(b => b.id === id);
    setUsed(prev => [...prev, id]);
    setSelectedBrand(brand);
    setModal({ show: true, title: brand.name });
  };

  const handleClose = () => setModal(m => ({ ...m, show: false }));
  const handleContinue = () => {
    setModal(m => ({ ...m, show: false }));
    navigate('/categories');
  };

  const available = brands.filter(b => !used.includes(b.id));
  const total = available.length;
  const balloons = available.map((b, idx) => {
    const base = ((idx + 1) / (total + 1)) * 100;
    const jitter = (Math.random() - 0.5) * (100 / (total + 1)) * 0.6;
    const x = Math.min(95, Math.max(5, base + jitter));

    return {
      ...b,
      x,
      delay: Math.random() * 2,
      duration: 5 + Math.random() * 3
    };
  });

  return (
    <div className="position-relative vh-100 bg-light">
      <h2 className="text-center pt- fs-1">Elige una marca</h2>

      {balloons.map(b => (
        <Balloon
          key={b.id}
          id={b.id}
          brand={b.name}
          x={b.x}
          delay={b.delay}
          duration={b.duration}
          onPop={handlePop}
          isPopped={used.includes(b.id)}
        />
      ))}

      <BalloonModal
        show={modal.show}
        onHide={handleClose}
        onContinue={handleContinue}
        title={modal.title}
      />
    </div>
  );
};

export default GamePage1;
