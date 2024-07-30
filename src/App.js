import { Home, Authenticate, Activate, Rooms } from "./pages";
import { MainLayout } from "./components";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { Navigate } from "react-router-dom";

const isAuth = false;
const isActivated = false;

const GuestRoute = ({ children, ...rest }) => {
  const location = useLocation();

  return isAuth ? (
    <Navigate to="/rooms" state={{ from: location }} {...rest} />
  ) : (
    children
  );
};

const SemiProtectedRoute = ({ children, ...rest }) => {
  const location = useLocation();

  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} />
  ) : !isActivated ? (
    children
  ) : (
    <Navigate to="/rooms" state={{ from: location }} />
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  const location = useLocation();

  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} />
  ) : !isActivated ? (
    <Navigate to="/activate" state={{ from: location }} />
  ) : (
    children
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <GuestRoute>
            <Home />
          </GuestRoute>
        ),
      },
      {
        path: "/authenticate",
        element: (
          <GuestRoute>
            <Authenticate />
          </GuestRoute>
        ),
      },
      {
        path: "/activate",
        element: (
          <SemiProtectedRoute>
            <Activate />
          </SemiProtectedRoute>
        ),
      },
      {
        path: "/rooms",
        element: (
          <ProtectedRoute>
            <Rooms />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
