import { RouterProvider } from 'react-router-dom';

import { Router } from './router/Router';
import { Reset } from 'styled-reset';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <RouterProvider router={Router} />
    </React.Fragment>
  );
}

export default App;
