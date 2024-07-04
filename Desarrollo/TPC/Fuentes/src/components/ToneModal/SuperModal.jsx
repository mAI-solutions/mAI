import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const SuperModal = ({ selectedText, onConfirm, onCancel }) => {
  const [tone, setTone] = useState('imperativo');

  const handleConfirm = () => {
    onConfirm(tone);
  };

  return ReactDOM.createPortal(
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      zIndex: 1000
    }}>
      <div>
        <h3>Seleccionar REACT tono</h3>
        <select id="tone-select" value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="imperativo">Imperativo</option>
          <option value="formal">Formal</option>
          <option value="serio">Serio</option>
        </select>
      </div>
      <div>
        <button id="confirm-button" onClick={handleConfirm}>Confirmar</button>
        <button id="cancel-button" onClick={onCancel}>Cancelar</button>
      </div>
    </div>,
    document.body
  );
};

export default SuperModal;
