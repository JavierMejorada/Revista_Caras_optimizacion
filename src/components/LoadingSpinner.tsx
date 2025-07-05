import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255,0,0,0.3);
  border-radius: 50%;
  border-top-color: #ff0000;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const LoadingSpinner = () => (
  <LoadingWrapper>
    <SpinnerContainer aria-label="Cargando..." />
  </LoadingWrapper>
);