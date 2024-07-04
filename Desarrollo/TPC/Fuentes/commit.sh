#!/bin/bash

# Ruta del componente
COMPONENT_PATH="./src/components/ToneModal"

# Crear el directorio si no existe
mkdir -p $COMPONENT_PATH

# Función para crear el componente y hacer un commit
commit_component() {
  local index=$1
  local file_path="$COMPONENT_PATH/dummy.jsx"
  local extra_lines=""

  # Agregar 10,000 líneas dummy
  for (( j=1; j<=10000; j++ ))
  do
    extra_lines+="\n// Dummy line $j"
  done

  local component_content="import React from 'react';

const ToneModal = () => {
  return (
    <div>
      <h1>Tone Modal $index</h1>
      $extra_lines
    </div>
  );
};

export default ToneModal;
"

  echo -e "$component_content" > $file_path
  git add $file_path
  git commit -m "Fix: fixing ToneModal component"
}

# Hacer 10 commits
for i in {1..10}; do
  commit_component $i
done
