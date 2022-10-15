import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="account/auth" replace />,
    // errorElement: <NotFound />,
  },
  {
    path: "/account",
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "auth/",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
