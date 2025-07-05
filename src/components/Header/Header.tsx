import React from 'react';
import { 
  HeaderContainer,
  Title,
  Subtitle 
} from './styles.ts';
import OptimizedImage from '../../../OptimizedImage.js';

export const Header = () => (
  <HeaderContainer role="banner"> 
    <div className="container">
      <OptimizedImage 
        src="/img/Logo%202.png" 
        alt="CARAS Logo - Revista de moda y estilo de vida"
        width={300}
        height={82}
      />
      <Title>Suscríbete a nuestro Newsletter</Title>
      <Subtitle>Recibe lo mejor de CARAS directamente en tu correo</Subtitle>
    </div>
  </HeaderContainer>
);