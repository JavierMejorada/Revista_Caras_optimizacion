import React from 'react';
import {
  FooterContainer,
  SocialLinks,
  SocialIcon,
  FooterText,
  FooterLogo,
  Copyright
} from './styles.ts';

export const Footer = () => (
  <FooterContainer role="contentinfo"> {/* Añadido role="contentinfo" */}
    <FooterText>Síguenos en:</FooterText>
    
    <SocialLinks aria-label="Redes sociales"> {/* Añadido aria-label */}
      <a href="https://www.facebook.com/Revista.Caras/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <SocialIcon src="/img/R%20(1).png" alt="Facebook" />
      </a>
      <a href="https://x.com/caras/status/1549749012236013568" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <SocialIcon src="/img/logo-twitter-circle-png-transparent-image-1.png" alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/revistacaras/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <SocialIcon src="/img/R.png" alt="Instagram" />
      </a>
    </SocialLinks>

    <FooterLogo src="/img/Logo%201.png" alt="CARAS Logo - Revista de moda y estilo de vida" /> {/* Descripción más detallada */}
    
    <Copyright>
      &copy; {new Date().getFullYear()} CARAS. Todos los derechos reservados.
    </Copyright>
  </FooterContainer>
);