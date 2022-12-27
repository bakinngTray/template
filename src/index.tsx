import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Search from './Search';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


/**
 * Навигация по сайту
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search_result",
    element: <Search />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);