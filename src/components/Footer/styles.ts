import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 40px 0 20px;
  text-align: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

export const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FooterText = styled.p`
  margin: 10px 0;
  color: #ccc;
  font-size: 0.9rem;
`;

export const FooterLogo = styled.img`
  max-width: 100px;
  margin: 20px auto 0;
  display: block;
`;

export const Copyright = styled.p`
  margin-top: 30px;
  font-size: 0.8rem;
  color: #999;
`;