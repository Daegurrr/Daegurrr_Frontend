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


  ::-webkit-scrollbar {
  width: 8px;
  background-color: #e0e0e0;
}

::-webkit-scrollbar-thumb {
  background: #C1BFBF; /* Color of the scrollbar */
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555; /* Color when hovered */
}
`;
