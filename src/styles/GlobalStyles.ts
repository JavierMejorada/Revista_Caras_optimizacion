import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Fuentes */
  @font-face {
    font-family: "Barlow Bold";
    src: url("../fonts/Barlow-Bold.woff2") format("woff2"), 
         url("../fonts/Barlow-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Barlow Light";
    src: url("../fonts/Barlow-Light.woff2") format("woff2"), 
         url("../fonts/Barlow-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Playfair Display";
    src: url("../fonts/Playfair-Display-Regular.woff2") format("woff2"), 
         url("../fonts/Playfair-Display-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  /* Estilos globales */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Barlow Light", sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
  }

  /* Header */
  header {
    background-color: #ff0000;
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid #ddd;

    .logo {
      max-width: 150px;
    }

    h1 {
      margin: 10px 0;
      font-size: 2em;
      font-family: "Barlow Bold", sans-serif;
      color: #fff;
    }

    p {
      font-size: 1.2em;
      color: #fff;
    }
  }

  /* Main Content */
  main {
    padding: 20px 0;
  }

  /* Subscription Form */
  .subscription-form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    h2 {
      margin-bottom: 20px;
      font-family: "Playfair Display", serif;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    label {
      margin: 10px 0 5px;
      font-weight: bold;
    }

    input {
      width: 100%;
      max-width: 400px;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: #333;
      color: #fff;
      cursor: pointer;
      font-size: 1.1em;
      font-family: "Barlow Bold", sans-serif;

      &:hover {
        background-color: #555;
      }
    }
  }

  /* Highlight Section */
  .highlight {
    padding: 20px;
    text-align: center;
  }

  .highlight-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;

      .benefit {
        flex: 1 1 100%;
      }
    }
  }

  .benefit {
    flex: 1 1 30%;
    margin: 10px;
    text-align: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }

  /* Testimonials */
  .testimonials {
    background-color: #f9f9f9;
    padding: 20px;

    .testimonial {
      margin-bottom: 20px;
      text-align: center;

      img {
        border-radius: 0%;
        width: 150px;
        height: 150px;
      }
    }
  }

  /* Footer */
  footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;

    p {
      margin: 10px 0;
    }

    a {
      display: inline-block;
      margin: 0 10px;
    }

    img {
      width: 24px;
      height: 24px;
    }

    .footer-logo {
      margin-top: 20px;
      max-width: 100px;
    }
  }

  /* Mensajes */
  .error-message {
    color: red;
    font-size: 0.9em;
    margin-top: -10px;
    margin-bottom: 10px;
    display: block;
  }

  .success-message {
    color: green;
    font-size: 1.2em;
    margin-top: 15px;
    text-align: center;
  }
`;

export default GlobalStyles;