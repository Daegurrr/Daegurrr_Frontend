import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    font-family: 'Apple SD Gothic Neo',
      Sans-serif;
    font-optical-sizing: auto;
    line-height: 1.4;
  }

`;
