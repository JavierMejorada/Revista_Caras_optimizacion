import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Fuentes optimizadas */
  @font-face {
    font-family: "Barlow Bold";
    src: url("/Fonts/Barlow-Bold.woff2") format("woff2"),
         url("/Fonts/Barlow-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap; /* Mejor rendimiento */
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

  /* Resto de tus estilos globales se mantienen igual */
  /* ... */
`;

export default GlobalStyles;