import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    line-height: 1.69;
    color: #93918f;

    h1, h2, h3, h4, h5, h6 {
      color: #000000;
      font-family: "Bitter", serif;
      font-weight: normal;
      text-align: center;
    }

    h1 {
      font-size: 2.375em;
    }

    h2 {
      font-size: 1.5em;
    }

    a {
      color: #0087ff;
    }
  }
`;

export default GlobalStyle;
