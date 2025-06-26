import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background: #222;
  color: white;
  text-align: center;
`;

export const Footer = () => (
  <FooterContainer>
    <p>Síguenos en redes: @RevistaCaras</p>
    <p>Contacto: contacto@caras.com</p>
  </FooterContainer>
);
