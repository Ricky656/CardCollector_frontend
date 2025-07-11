import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import HomePage from './pages/HomePage.jsx';
import UsersPage from './pages/UsersPage.jsx';
import CollectionPage from './pages/CollectionPage.jsx';
import CardsPage from "./pages/CardsPage.jsx";
import ViewCardPage from "./pages/ViewCardPage.jsx";
import BoostersPage from "./pages/BoostersPage.jsx";
import ViewBoostersPage from "./pages/ViewBoosterPage.jsx";
import CreateBoosterPage from "./pages/CreateBoosterPage.jsx";

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
    element: <CardsPage />,
  },
  {
    path: "/cards/:cardId",
    element: <ViewCardPage />
  },
  {
    path: "/packs",
    element: <BoostersPage />
  },
  {
    path: "/packs/:packId",
    element: <ViewBoostersPage />
  },
  {
    path: "/packs/new",
    element: <CreateBoosterPage />
  }
]);

function App(){
    return (
        <RouterProvider router={router} />
    )
}

export default App;