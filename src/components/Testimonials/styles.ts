import styled from 'styled-components';

export const TestimonialsContainer = styled.section`
  background-color: #f9f9f9;
  padding: 40px 0;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Playfair Display', serif;
  margin-bottom: 30px;
  font-size: 2rem;
  color: #333;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const TestimonialCard = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

export const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 15px;
  border: 3px solid #ff0000;
`;

export const TestimonialText = styled.p`
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
`;

export const TestimonialAuthor = styled.span`
  font-weight: bold;
  color: #ff0000;
`;