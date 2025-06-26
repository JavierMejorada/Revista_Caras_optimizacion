import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 2rem;
  text-align: center;
  background-color: #222;
  color: white;
`;

const Logo = styled.h1`
  font-size: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
`;

export const Header = () => (
  <HeaderContainer>
    <Logo>CARAS</Logo>
    <Subtitle>La revista de estilo de vida y sociedad</Subtitle>
  </HeaderContainer>
);
