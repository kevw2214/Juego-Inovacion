// src/pages/GamePage3.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Balloon from '../components/Balloon';
import BalloonModal from '../components/BalloonModal';
import { conditions } from '../data/conditions';

const GamePage3 = ({ selectedBrand, selectedCategory, registerGroup }) => {
  const list = conditions[selectedBrand.name][selectedCategory.title] || [];
  const [used, setUsed] = useState([]);
  const [modal, setModal] = useState({ show: false, title: '' });
  const navigate = useNavigate();

  const handlePop = (idx) => {
    const cond = list[idx];
    setUsed((prev) => [...prev, idx]);
    registerGroup({
      brand: selectedBrand.name,
      category: selectedCategory.title,
      condition: cond,
    });
    setModal({ show: true, title: cond });
  };

  const handleClose = () => setModal((m) => ({ ...m, show: false }));
  const handleContinue = () => {
    setModal((m) => ({ ...m, show: false }));
    navigate('/summary');
  };

  // Prepara globos con posición base + jitter + delay + duración
  const available = list.filter((_, idx) => !used.includes(idx));
  const total = available.length;
  const balloons = available.map((cond, idx) => {
    const base = ((idx + 1) / (total + 1)) * 100;
    const jitter = (Math.random() - 0.5) * (100 / (total + 1)) * 0.5;
    const x = Math.min(95, Math.max(5, base + jitter));
    return {
      idx: list.findIndex((c) => c === cond),
      x,
      delay: Math.random() * 2,           // 0–2s
      duration: 5 + Math.random() * 3     // 5–8s
    };
  });

  return (
    <div className="position-relative vh-100 bg-light">
      <h2 className="text-center pt-4">⚠️ Condiciones de {selectedCategory.title}</h2>

      {balloons.map((b) => (
        <Balloon
          key={b.idx}
          id={b.idx}
          brand={selectedBrand.name}   // color según marca
          x={b.x}
          delay={b.delay}
          duration={b.duration}
          onPop={() => handlePop(b.idx)}
          isPopped={used.includes(b.idx)}
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

export default GamePage3;
