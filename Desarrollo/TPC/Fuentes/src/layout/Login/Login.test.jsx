import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login'; // Asegúrate de importar tu componente Login correctamente
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import useUser from '../../store/useUser'; // Asegúrate de importar el hook useUser

// Mockeamos el hook useUser para controlar su comportamiento
vi.mock('../../store/useUser', () => ({
  default: () => ({
    login: vi.fn(),
  }),
}));

// Mockeamos el hook useForm para controlar su comportamiento
vi.mock('@mantine/form', () => ({
  ...jest.requireActual('@mantine/form'),
  useForm: vi.fn(() => ({
    onSubmit: vi.fn(),
    getInputProps: vi.fn(() => ({
      onChange: vi.fn(),
    })),
    key: vi.fn(),
    setFieldError: vi.fn(),
  })),
}));

// Mockeamos el hook useDisclosure para controlar su comportamiento
vi.mock('@mantine/hooks', () => ({
  ...jest.requireActual('@mantine/hooks'),
  useDisclosure: vi.fn(() => ({
    open: vi.fn(),
    close: vi.fn(),
  })),
}));

describe('Login', () => {
  test('Renderiza el componente correctamente', () => {
    render(<Login />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByLabelText('Usuario o email')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Iniciar sesión/i })).toBeInTheDocument();
  });

  describe('Maneja el formulario', () => {
    test('Envía el formulario correctamente', async () => {
      const mockCredentials = { username: 'testuser', password: 'testpassword' };
      const mockError = { data: { code: 400 } };
      const mockResponse = { error: mockError };

      // Configuramos el mock para el hook useForm
      useForm.mockReturnValueOnce({
        onSubmit: vi.fn((callback) => callback(mockCredentials)),
        getInputProps: vi.fn(() => ({
          onChange: vi.fn(),
        })),
        key: vi.fn(),
        setFieldError: vi.fn(),
      });

      // Configuramos el mock para el hook useUser
      useUser.mockReturnValueOnce({
        login: vi.fn().mockResolvedValue(mockResponse),
      });

      render(<Login />);
      const form = screen.getByRole('form');
      const usernameInput = screen.getByLabelText('Usuario o email');
      const passwordInput = screen.getByLabelText('Contraseña');
      const submitButton = screen.getByRole('button', { name: /Iniciar sesión/i });

      fireEvent.change(usernameInput, { target: { value: mockCredentials.username } });
      fireEvent.change(passwordInput, { target: { value: mockCredentials.password } });
      fireEvent.click(submitButton);

      expect(useUser().login).toHaveBeenCalledWith(mockCredentials);
      expect(useForm().onSubmit).toHaveBeenCalledWith(expect.any(Function));
      expect(useDisclosure().open).toHaveBeenCalled();
      expect(useDisclosure().close).toHaveBeenCalled();
      expect(useForm().setFieldError).toHaveBeenCalledWith('username', 'Usuario o contraseña incorrectos');
    });
  });
});