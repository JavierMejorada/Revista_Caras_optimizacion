import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #fafafa;
    color: #333;
  }

  h1, h2, h3 {
    margin-bottom: 1rem;
  }
`;
