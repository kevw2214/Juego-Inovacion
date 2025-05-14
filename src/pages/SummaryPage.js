import React from 'react';
import { COLOR_MAP } from '../data/Colors';

const SummaryPage = () => {
  const groups = JSON.parse(localStorage.getItem('history')) || [];

  const handleReset = () => {
    localStorage.removeItem('history');
    window.location.reload();
  };

  return (
    <div className="summaryPage-container container py-4">
      <h2 className="text-center display-3 mb-4"> HISTORIAL DE SELECCIONES</h2>

      <div className="text-center mt-4">
        <button onClick={handleReset} className="btn btn-danger btn-lg">
          Reiniciar historial
        </button>
      </div>
      <br />

      {groups.length === 0 ? (
        <p className="text-muted text-center">No hay selecciones aún.</p>
      ) : (
        <div className="row justify-content-center">
          {groups.map((g, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div
                className="card shadow"
                style={{
                  backgroundColor: COLOR_MAP[g.brand] || '#f8f9fa',
                  minHeight: '250px',
                  color: 'white',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className="card-body text-center" style={{ fontSize: '1.8rem' }}>
                  <strong>Marca:</strong> {g.brand} <br />
                  <strong>Categoría:</strong> {g.category} <br />
                  <strong>Condición:</strong> {g.condition}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SummaryPage;
