import { Home, Register } from "./pages";
import { MainLayout } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
