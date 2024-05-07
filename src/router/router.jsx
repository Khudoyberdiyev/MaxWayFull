import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "./../pages/Error";
import Home from "../pages/Home";
import Branches from "./../pages/Branches";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import Cart from "./../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/branches",
        element: <Branches />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
