import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FeaturedSection } from '../components/FeaturedSection.tsx';

describe('FeaturedSection', () => {
  test('renders correctly', () => {
    const { getByText, getAllByRole } = render(<FeaturedSection />);
    
    expect(getByText('¿Por qué suscribirse?')).toBeInTheDocument();
    expect(getAllByRole('img')).toHaveLength(3);
  });
});

  test('is responsive', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    
    const { container } = render(<FeaturedSection />);
    const benefitsContainer = container.querySelector('.highlight-content');
    
    expect(benefitsContainer).toHaveStyle('flex-direction: column');
  });