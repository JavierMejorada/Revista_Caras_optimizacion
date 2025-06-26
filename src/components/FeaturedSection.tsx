import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background: #f4f4f4;
`;

export const FeaturedSection = () => (
  <Section>
    <h2>¿Por qué suscribirte?</h2>
    <ul>
      <li>Acceso exclusivo a entrevistas</li>
      <li>Eventos y lanzamientos de lujo</li>
      <li>Contenido semanal curado por expertos</li>
    </ul>
    <img src="/caras-beneficios.jpg" alt="Beneficios" style={{ width: '100%', marginTop: '1rem' }} />
  </Section>
);
