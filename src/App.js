import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
import GamePage1 from './pages/GamePage1';
import GamePage2 from './pages/GamePage2';
import GamePage3 from './pages/GamePage3';
import SummaryPage from './pages/SummaryPage';

function App() {
  
  const [usedBrands, setUsedBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [groups, setGroups] = useState(() => {
    const stored = localStorage.getItem('history');
    return stored ? JSON.parse(stored) : [];
  });
  const handleSetBrand = (brand) => {
    setSelectedBrand(brand);
    setUsedBrands(prev => [...prev, brand.id]);
  };

  const handleSetCategory = (category) => {
    setSelectedCategory(category);
  };



  const registerGroup = (group) => {
    const updated = [...groups, group];
    setGroups(updated);
    localStorage.setItem('history', JSON.stringify(updated));
  };
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route
          path="/brands"
          element={
            <GamePage1
              usedBrands={usedBrands}
              setSelectedBrand={handleSetBrand}
            />
          }
        />

        <Route
          path="/categories"
          element={
            selectedBrand
              ? <GamePage2
                selectedBrand={selectedBrand}
                setSelectedCategory={handleSetCategory}
              />
              : <Navigate to="/brands" replace />
          }
        />

        <Route
          path="/conditions"
          element={
            selectedBrand && selectedCategory
              ? <GamePage3
                selectedBrand={selectedBrand}
                selectedCategory={selectedCategory}
                registerGroup={registerGroup}
              />
              : <Navigate to="/categories" replace />
          }
        />

        <Route
          path="/summary"
          element={<SummaryPage groups={groups} />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
