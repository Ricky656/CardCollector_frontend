import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './assets/stylesheets/config/_reset.scss'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
