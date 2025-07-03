import React from 'react';
import { 
  HeaderContainer,
  Logo,
  Title,
  Subtitle 
} from './styles.ts';

export const Header = () => (
  <HeaderContainer>
    <div className="container">
      <Logo src="/img/Logo%202.png" alt="CARAS Logo" />
      <Title>Suscríbete a nuestro Newsletter</Title>
      <Subtitle>Recibe lo mejor de CARAS directamente en tu correo</Subtitle>
    </div>
  </HeaderContainer>
);