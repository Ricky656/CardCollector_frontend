import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import HomePage from './pages/HomePage.jsx';
import UsersPage from './pages/UsersPage.jsx';
import CollectionPage from './pages/CollectionPage.jsx';
import CardsPage from "./pages/CardsPage.jsx";

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
  },
  {
    path: "/cards",
    element: <CardsPage />
  }
]);

function App(){
    return (
        <RouterProvider router={router} />
    )
}

export default App;