import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header'; // Asegúrate de importar tu componente Header correctamente
import MenuBurger from './MenuBurger';
import ModuleSelect from './ModuleSelect';
import UserOptions from './UserOptions';
import { Group, Box } from '@mantine/core';
import useGUIData from '../../store/useGUI';

// Mockeamos los componentes MenuBurger, ModuleSelect y UserOptions para evitar dependencias externas durante las pruebas
vi.mock('./MenuBurger', () => ({
  default: () => <div>MenuBurger Component</div>,
}));

vi.mock('./ModuleSelect', () => ({
  default: () => <div>ModuleSelect Component</div>,
}));

vi.mock('./UserOptions', () => ({
  default: () => <div>UserOptions Component</div>,
}));

// Mockeamos el hook useGUIData para controlar su comportamiento
vi.mock('../../store/useGUI', () => ({
  default: () => ({
    currentRoute: 'home',
    setCurrentRoute: vi.fn(),
  }),
}));

describe('Header', () => {
  test('Renderiza el componente Header correctamente', () => {
    render(<Header />);

    // Verifica que los componentes hijos estén presentes en el DOM
    expect(screen.getByText('MenuBurger Component')).toBeInTheDocument();
    expect(screen.getByText('ModuleSelect Component')).toBeInTheDocument();
    expect(screen.getByText('UserOptions Component')).toBeInTheDocument();

    // Verifica que el elemento Group esté presente
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  test('Pasa las props correctas al componente ModuleSelect', () => {
    render(<Header />);

    // Verifica que las props currentRoute y setCurrentRoute se hayan pasado correctamente a ModuleSelect
    expect(ModuleSelect).toHaveBeenCalledWith(
      expect.objectContaining({
        currentRoute: 'home',
        setCurrentRoute: expect.any(Function),
      })
    );
  });
});