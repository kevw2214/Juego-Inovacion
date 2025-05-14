import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Balloon from '../components/Balloon';
import BalloonModal from '../components/BalloonModal';
import { categories } from '../data/categories';

const GamePage2 = ({ selectedBrand, setSelectedCategory }) => {
  const list = categories[selectedBrand.name] || [];
  const [used, setUsed] = useState([]);
  const [modal, setModal] = useState({ show: false, title: '' });
  const navigate = useNavigate();

  const handlePop = (idx) => {
    const category = list[idx];
    setUsed((prev) => [...prev, idx]);
    setSelectedCategory(category);
    setModal({ show: true, title: category.title });
  };

  const handleClose = () => setModal((m) => ({ ...m, show: false }));
  const handleContinue = () => {
    setModal((m) => ({ ...m, show: false }));
    navigate('/conditions');
  };


  const available = list.filter((_, idx) => !used.includes(idx));
  const total = available.length;
  const balloons = available.map((c, idx) => {
    const base = ((idx + 1) / (total + 1)) * 100;
    const jitter = (Math.random() - 0.5) * (100 / (total + 1)) * 0.5;
    const x = Math.min(95, Math.max(5, base + jitter));
    return {
      idx: list.findIndex((cat) => cat.title === c.title),
      x,
      delay: Math.random() * 2,
      duration: 5 + Math.random() * 3,
    };
  });

  return (
    <div className="position-relative vh-100 bg-light">
      <h2 className="text-center pt-4"> CATEGORIAS DE {selectedBrand.name}</h2>

      {balloons.map((b) => (
        <Balloon
          key={b.idx}
          id={b.idx}
          brand={selectedBrand.name}
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

export default GamePage2;
