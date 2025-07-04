import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header/Header';

describe('Header Component', () => {
  test('renders logo, title and subtitle correctly', () => {
    render(<Header />);
    
    // Verificar elementos
    expect(screen.getByAltText('CARAS Logo')).toBeInTheDocument();
    expect(screen.getByText('Suscríbete a nuestro Newsletter')).toBeInTheDocument();
    expect(screen.getByText('Recibe lo mejor de CARAS directamente en tu correo')).toBeInTheDocument();
    
    // Verificar atributos
    const logo = screen.getByAltText('CARAS Logo');
    expect(logo).toHaveAttribute('src', '/img/Logo%202.png');
  });

  test('has correct styling classes', () => {
    const { container } = render(<Header />);
    
    // Verificar clases de styled-components
    expect(container.querySelector('header')).toHaveStyle('background-color: #ff0000');
    expect(screen.getByRole('heading')).toHaveStyle('font-family: Barlow Bold');
  });
});