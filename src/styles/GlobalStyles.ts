import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Optimización de fuentes con font-display */
  @font-face {
    font-family: "Barlow Bold";
    src: url("/Fonts/Barlow-Bold.woff2") format("woff2"), 
         url("/Fonts/Barlow-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow Light";
    src: url("/Fonts/Barlow-Light.woff2") format("woff2"), 
         url("/Fonts/Barlow-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Playfair Display";
    src: url("/Fonts/Playfair-Display-Regular.woff2") format("woff2"), 
         url("/Fonts/Playfair-Display-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* Critical CSS - Estilos mínimos para renderizado inicial */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Barlow Light", sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
  }

  /* Optimización de imágenes */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Mejoras de accesibilidad en focus */
  a, button, input, textarea {
    &:focus {
      outline: 2px solid #ff0000;
      outline-offset: 2px;
    }
  }

  /* Layout básico */
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  /* Media queries para carga condicional */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Estilos para modo oscuro */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #121212;
      color: #f1f1f1;
    }
  }
`;

export default GlobalStyles;