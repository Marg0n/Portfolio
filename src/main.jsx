import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import 'aos/dist/aos.css';
import 'animate.css';
import { HelmetProvider } from 'react-helmet-async';
import Medi from './pages/projects/Medi.jsx';
import BestDeal from './pages/projects/BestDeal';
import Bicycle from './pages/projects/Bicycle';
import Horizon from './pages/projects/Horizon';
import WordInsight from './pages/projects/WordInsight';
import MediHouse from './pages/projects/MediHouse.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [

    ]
  },
  {
    path: "/medi",
    element: <Medi />,
  },
  {
    path: "/medihouse",
    element: <MediHouse />,
  },
  {
    path: "/bestdeal",
    element: <BestDeal />,
  },
  {
    path: "/bicycle",
    element: <Bicycle />,
  },
  {
    path: "/horizon",
    element: <Horizon />,
  },
  {
    path: "/wordinsight",
    element: <WordInsight />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
