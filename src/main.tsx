import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: () => <div>loader</div>,
    children: [
      {
        path: '/page1',
        element: <Page1 />,
        loader: () => <div>loader</div>,
      },
      {
        path: '/page2',
        element: <Page2 />,
        loader: () => <div>loader</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
