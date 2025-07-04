import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importa los matchers adicionales
import { SubscriptionForm } from '../components/SubscriptionForms/SubscriptionForm';
import { useForm } from '../Hooks/useForm';

// Mock completo del hook useForm
jest.mock('../Hooks/useForm', () => ({
  useForm: jest.fn()
}));

describe('SubscriptionForm Component', () => {
  const mockHandleSubmit = jest.fn((e) => e.preventDefault());
  const mockHandleChange = jest.fn();
  const mockResetForm = jest.fn();

  // Configuración base del mock
  const baseMockValues = {
    formData: { name: '', email: '' },
    errors: {},
    isSubmitting: false,
    submitSuccess: false,
    handleChange: mockHandleChange,
    handleSubmit: mockHandleSubmit,
    resetForm: mockResetForm
  };

  beforeEach(() => {
    (useForm as jest.Mock).mockReturnValue(baseMockValues);
  });

  test('renders form elements correctly', () => {
    const { getByText, getByLabelText, getByRole } = render(<SubscriptionForm />);
    
    expect(getByText('¡No te lo pierdas!')).toBeInTheDocument();
    expect(getByLabelText('Nombre:')).toBeInTheDocument();
    expect(getByLabelText('Correo Electrónico:')).toBeInTheDocument();
    expect(getByRole('button', { name: /suscribirse/i })).toBeInTheDocument();
  });

  test('shows validation errors', () => {
    (useForm as jest.Mock).mockReturnValueOnce({
      ...baseMockValues,
      formData: { name: '', email: 'invalid' },
      errors: { name: 'Nombre requerido', email: 'Email inválido' }
    });
    
    const { getByText } = render(<SubscriptionForm />);
    
    expect(getByText('Nombre requerido')).toBeInTheDocument();
    expect(getByText('Email inválido')).toBeInTheDocument();
  });

  test('submits form successfully', async () => {
    const { getByRole } = render(<SubscriptionForm />);
    
    fireEvent.submit(getByRole('form'));
    
    await waitFor(() => {
      expect(mockHandleSubmit).toHaveBeenCalled();
    });
  });
});