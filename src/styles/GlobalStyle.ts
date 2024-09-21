import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    // font-family: 'Apple SD Gothic Neo',
    //   Sans-serif;
    font-family:'Pretendard-Regular';
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
