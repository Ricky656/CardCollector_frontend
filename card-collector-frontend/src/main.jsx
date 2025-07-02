import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './assets/stylesheets/config/_reset.scss'
import HomePage from './pages/HomePage.jsx';
import UsersPage from './pages/UsersPage.jsx';
import CollectionPage from './pages/CollectionPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/users",
    element: <UsersPage />
  },
  {
    path: "/collection",
    element: <CollectionPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
