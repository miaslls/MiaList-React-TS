import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "@/App";
import SignIn from "@pages/SignIn";

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
        element: <SignIn />,
      },
    ],
  },
]);

export default Router;
