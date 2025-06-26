import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
`;

export const Testimonials = () => (
  <Section>
    <h2>Lo que opinan nuestros lectores</h2>
    <blockquote>"CARAS me inspira y me mantiene al día con el mundo del estilo." - Ana G.</blockquote>
    <blockquote>"Una revista de primer nivel, contenido excelente." - Carlos M.</blockquote>
  </Section>
);
