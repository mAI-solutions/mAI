import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuBurger from './MenuBurger';
import { ActionIcon, Menu } from '@mantine/core';
import { IconMenu2, IconArrowLeft } from '@tabler/icons-react';
import { useDisclosure, useClickOutside } from '@mantine/hooks';
import useGUIData from '../../../store/useGUI';

// Mockeamos los hooks para controlar su comportamiento
vi.mock('@mantine/hooks', () => ({
  ...jest.requireActual('@mantine/hooks'),
  useDisclosure: vi.fn(() => ({
    open: vi.fn(),
    close: vi.fn(),
    toggle: vi.fn(),
  })),
  useClickOutside: vi.fn(() => ({
    current: { addEventListener: vi.fn() },
  })),
}));

vi.mock('../../../store/useGUI', () => ({
  default: () => ({
    currentRoute: {
      route: {
        children: {
          'submenu-1': {
            label: 'Submenu 1',
            Icon: IconMenu2,
          },
          'submenu-2': {
            label: 'Submenu 2',
            Icon: IconArrowLeft,
          },
        },
      },
      path: ['home'],
    },
    setCurrentRoute: vi.fn(),
  }),
}));

describe('MenuBurger', () => {
  test('Renderiza el componente correctamente', () => {
    render(<MenuBurger />);

    // Verifica que los elementos básicos estén presentes
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('menu')).toBeInTheDocument();

    // Verifica que el ícono inicial sea el correcto
    expect(screen.getByRole('img', { name: /IconMenu2/i })).toBeInTheDocument();
  });

  test('Abre y cierra el menú', () => {
    render(<MenuBurger />);

    // Simula un clic en el botón del menú
    fireEvent.click(screen.getByRole('button'));

    // Verifica que el menú se haya abierto
    expect(screen.getByRole('menu')).toHaveAttribute('aria-expanded', 'true');
    expect(useDisclosure().open).toHaveBeenCalled();

    // Simula un clic fuera del menú
    fireEvent.click(document.body);

    // Verifica que el menú se haya cerrado
    expect(screen.getByRole('menu')).toHaveAttribute('aria-expanded', 'false');
    expect(useDisclosure().close).toHaveBeenCalled();
  });

  test('Maneja la navegación hacia atrás', () => {
    render(<MenuBurger />);

    // Simula que la ruta actual es 'home/submenu-1'
    useGUIData.mockReturnValueOnce({
      currentRoute: {
        route: {},
        path: ['home', 'submenu-1'],
      },
      setCurrentRoute: vi.fn(),
    });

    // Simula un clic en el botón del menú (que ahora debería mostrar el ícono de 'atrás')
    fireEvent.click(screen.getByRole('button'));

    // Verifica que el ícono de 'atrás' esté presente
    expect(screen.getByRole('img', { name: /IconArrowLeft/i })).toBeInTheDocument();

    // Simula un clic en el botón 'Atrás'
    fireEvent.click(screen.getByRole('menuitem', { name: /Atrás/i }));

    // Verifica que la ruta actual se haya actualizado correctamente
    expect(useGUIData().setCurrentRoute).toHaveBeenCalledWith(['home']);
  });

  test('Maneja los submenús', () => {
    render(<MenuBurger />);

    // Simula un clic en el botón del menú
    fireEvent.click(screen.getByRole('button'));

    // Verifica que los submenús estén presentes
    expect(screen.getByRole('menuitem', { name: /Submenu 1/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /Submenu 2/i })).toBeInTheDocument();

    // Simula un clic en el primer submenú
    fireEvent.click(screen.getByRole('menuitem', { name: /Submenu 1/i }));

    // Verifica que la ruta actual se haya actualizado correctamente
    expect(useGUIData().setCurrentRoute).toHaveBeenCalledWith(['home', 'submenu-1']);
  });
});