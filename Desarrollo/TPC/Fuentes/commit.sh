#!/bin/bash

# Ruta del componente
COMPONENT_PATH="./src/components/ToneModal"

# Crear el directorio si no existe
mkdir -p $COMPONENT_PATH

# Componente dummy de React
commit_component() {
  local index=$1
  local file_path="$COMPONENT_PATH/dummy.jsx"
  local component_content="import React from 'react';

const ToneModal = () => {
  return (
    <div>
      <h1>Tone Modal $index</h1>
    </div>
  );
};

export default ToneModal;
"

  echo "$component_content" > $file_path
  git add $file_path
  git commit -m "feat: Add ToneModal component version $index"
}

# Hacer 10 commits
for i in {1..10}; do
  commit_component $i
done
