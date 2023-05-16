import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DetailPages from './pages/DetailPages';
import PricePages from './pages/PricePages';
import ContactPages from './pages/ContactPages';



const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/detail",
    element: <DetailPages />,
  },
  {
    path: "/price",
    element: <PricePages />,
  },
  {
    path: "/contact",
    element: <ContactPages />,
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
