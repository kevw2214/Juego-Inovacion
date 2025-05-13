// src/components/BalloonModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const BalloonModal = ({ show, onHide, onContinue, title }) => {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header>
        <Modal.Title className='fs-1'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary f-3" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary f-3" onClick={onContinue}>
          Continuar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BalloonModal;
