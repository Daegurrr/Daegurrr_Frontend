import { RouterProvider } from 'react-router-dom';

import { Router } from './router/Router';
import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </React.Fragment>
  );
}

export default App;
