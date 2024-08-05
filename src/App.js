import { Home, Authenticate, Activate, Rooms } from "./pages";
import { MainLayout } from "./components";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoadingWithRefresh } from "./hooks";

const GuestRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? (
    <Navigate to="/rooms" state={{ from: location }} {...rest} />
  ) : (
    children
  );
};

const SemiProtectedRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { isAuth, user } = useSelector((state) => state.auth);
  console.log("User", user.activated, isAuth);
  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} />
  ) : !user?.activated ? (
    children
  ) : (
    <Navigate to="/rooms" state={{ from: location }} />
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { isAuth, user } = useSelector((state) => state.auth);
  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} />
  ) : !user?.activated ? (
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
  const { loading } = useLoadingWithRefresh();

  return loading ? (
    "Loading..."
  ) : (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;
