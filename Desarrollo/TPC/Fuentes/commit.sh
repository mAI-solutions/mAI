#!/bin/bash

# Ruta del componente
COMPONENT_PATH="./src/components/ToneModal/dummy.jsx"

# Crear el directorio si no existe
mkdir -p $COMPONENT_PATH

# Componente dummy de React
COMPONENT_CONTENT="import React from 'react';

const ToneModal = () => {
  return (
    <div>
      <h1>Tone Modal</h1>
    </div>
  );
};

export default ToneModal;
"

# Función para crear el componente y hacer un commit
commit_component() {
  local index=$1
  local file_path="$COMPONENT_PATH"
  echo "$COMPONENT_CONTENT" > $file_path
  git add .
  git commit -m "feat: Add ToneModal component$index"
}

# Hacer 10 commits
for i in {1..10}; do
  commit_component $i
done
