import React from 'react';
import { HeaderContainer, Logo, Title, Subtitle } from './styles.ts';

export const Header = () => (
  <HeaderContainer role="banner" aria-label="Encabezado principal">
    <div className="container">
      <Logo 
        src="/img/Logo%202.webp" 
        alt="Revista CARAS - Líder en moda y estilo de vida" 
        width="150" 
        height="60"
        loading="eager"
      />
      <Title as="h1">Suscríbete a nuestro Newsletter Exclusivo</Title>
      <Subtitle as="h2">Recibe contenido premium de moda y celebridades directamente en tu correo</Subtitle>
    </div>
  </HeaderContainer>
);