import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PdPPage from './pages/PdPPage';
import ShopPage from './pages/ShopPage';
import BagPage from './pages/BagPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/PdP",
      element:<PdPPage/>
    },
    {
      path:"/shop",
      element:<ShopPage/>
    },
    {
      path:"/bag",
      element:<BagPage/>
    }
  ]
}])
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
);

