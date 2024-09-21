import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import ErrorPage from '../pages/Error';
import MainPage from '../pages/Main';

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
];

export const Router = createBrowserRouter(routesConfig);
