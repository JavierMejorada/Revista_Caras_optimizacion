import React from 'react';
import {
  TestimonialsContainer,
  SectionTitle,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialText
} from './styles.ts';

export const Testimonials = () => (
  <TestimonialsContainer className="testimonials">
    <SectionTitle>Lo que dicen nuestros suscriptores</SectionTitle>
    <TestimonialsGrid>
      <TestimonialCard className="testimonial">
        <TestimonialText>
          "¡Me encanta el contenido exclusivo que recibo cada mes! Siempre es interesante y útil."
        </TestimonialText>
        <p>- Ana P.</p>
      </TestimonialCard>

      <TestimonialCard className="testimonial">
        <TestimonialText>
          "Las ofertas y promociones son geniales. ¡Totalmente recomendable para estar al día con las tendencias!"
        </TestimonialText>
        <p>- Luis G.</p>
      </TestimonialCard>

      <TestimonialCard className="testimonial">
        <TestimonialText>
          "Suscribirse al newsletter de CARAS ha sido una excelente decisión. ¡Siempre estoy informado sobre lo último!"
        </TestimonialText>
        <p>- Marta L.</p>
      </TestimonialCard>
    </TestimonialsGrid>
  </TestimonialsContainer>
);