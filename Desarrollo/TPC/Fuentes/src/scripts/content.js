import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import SuperModal from '../components/ToneModal';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("3.1. Message received in content script", message); // cs: log para verificar llegada del 'muestra modal'
    if (message.type === "SHOW_MODAL" ) {
      console.log(message.info)
      showModal(message.selectedText);

    } else if (message.type === "SHOW_MODIFIED_TEXT") {
        console.log("3.2. Message received in content script", message); // cs: log para verificar llegada del 'muestra modal'
        showModifiedTextModal(message.modifiedText);
    }
});

// function showModal(selectedText) {

//     console.log("4. Showing modal for text:", selectedText); // cs: log para verificar el textoselec
    
//     const modal = document.createElement("div");

//     modal.style.position = "absolute";
//     modal.style.top = "50%";
//     modal.style.left = "50%";
//     modal.style.transform = "translate(-50%, -50%)";
//     modal.style.padding = "20px";
//     modal.style.backgroundColor = "white";
//     modal.style.border = "1px solid #ccc";
//     modal.style.zIndex = 1000;

//     modal.innerHTML = `
//     <div>
//       <h3>Seleccionar tono</h3>
//       <select id="tone-select">
//         <option value="imperativo">Imperativo</option>
//         <option value="formal">Formal</option>
//         <option value="serio">Serio</option>
//       </select>
//     </div>
//     <div>
//       <button id="confirm-button">Confirmar</button>
//       <button id="cancel-button">Cancelar</button>
//     </div>
//   `;

//   document.body.appendChild(modal);

//   document.getElementById("confirm-button").addEventListener("click", () => {
//       const tone = document.getElementById("tone-select").value;
//       chrome.runtime.sendMessage({ type: "CONFIRM_TONE", text: selectedText, tone });
//       document.body.removeChild(modal);
//   });

//   document.getElementById("cancel-button").addEventListener("click", () => {
//       document.body.removeChild(modal);
//   });

// }

function showModal(selectedText) {
  console.log("4. Showing modal for text:", selectedText); // cs: log para verificar el textoselec

  const handleConfirm = (tone) => {
    chrome.runtime.sendMessage({ type: "CONFIRM_TONE", text: selectedText, tone });
    closeModal();
  };

  const closeModal = () => {
    ReactDOM.unmountComponentAtNode(modalContainer);
    document.body.removeChild(modalContainer);
  };

  const modalContainer = document.createElement('div');
  document.body.appendChild(modalContainer);

  ReactDOM.render(<SuperModal selectedText={selectedText} onConfirm={handleConfirm} onCancel={closeModal} />, modalContainer);
}


function showModifiedTextModal(modifiedText) {
  
    const modal = document.createElement("div");

    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.padding = "20px";
    modal.style.backgroundColor = "white";
    modal.style.border = "1px solid #ccc";
    modal.style.zIndex = 1000;

    modal.innerHTML = `
        <div>
            <h3>Texto Modificado</h3>
            <p>${modifiedText}</p>
            <button id="close-button">Cerrar</button>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("close-button").addEventListener("click", () => {
        document.body.removeChild(modal);
    });
}