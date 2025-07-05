import React from 'react';
import { 
  HeaderContainer,
  Logo,
  Title,
  Subtitle 
} from './styles.ts';

export const Header = () => (
  <HeaderContainer role="banner"> 
    <div className="container">
      <Logo src="/img/Logo%202.png" alt="CARAS Logo - Revista de moda y estilo de vida" /> {/* Descripción más detallada */}
      <Title>Suscríbete a nuestro Newsletter</Title>
      <Subtitle>Recibe lo mejor de CARAS directamente en tu correo</Subtitle>
    </div>
  </HeaderContainer>
);