import styled from 'styled-components';

export const HighlightContainer = styled.section`
  padding: 40px 0;
  background-color: #fff;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Playfair Display', serif;
  margin-bottom: 30px;
  font-size: 2rem;
  color: #333;
`;

export const BenefitsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BenefitCard = styled.div`
  flex: 0 1 30%;
  margin: 15px;
  text-align: center;
  min-width: 250px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 350px;
  }
`;

export const BenefitImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;