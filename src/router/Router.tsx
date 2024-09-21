import { createBrowserRouter } from 'react-router-dom';

import RootPage from '../pages/Root/RootPage';
import ErrorPage from '../pages/Error';
import MainPage from '../pages/Main';
import AuthCallBackPage from '../pages/Auth';

const routesConfig = [
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: '/oauth/redirect',
    element: <AuthCallBackPage />,
  },
];

export const Router = createBrowserRouter(routesConfig);
