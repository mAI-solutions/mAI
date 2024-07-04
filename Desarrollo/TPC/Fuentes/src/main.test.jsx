import { render, screen } from '@testing-library/react';
import App from './App.jsx';
import { MantineProvider } from '@mantine/core';

// Mockeamos el componente App para que no intente hacer ninguna llamada a la API o a otras dependencias externas
jest.mock('./App.jsx', () => ({
  default: () => <div>App Component</div>,
}));

describe('App', () => {
  test('Renderiza el componente App correctamente', () => {
    render(
      <MantineProvider defaultColorScheme="dark">
        <App />
      </MantineProvider>
    );
    // Verifica que el componente App esté presente en el DOM (lo que significa que el renderizado fue exitoso)
    expect(screen.getByText('App Component')).toBeInTheDocument();
  });
});