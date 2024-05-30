import React from "react";
import { useRoutes } from "react-router-dom";
import ExternalLayout from "../Components/layout/external";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import DetailsLayout from "../Components/layout/details";

export default function Routes(product) {
  return useRoutes([
    {
      element: <ExternalLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      element: <DetailsLayout />,
      children: [{ path: "/details/:id", element: <Details /> }],
    },
  ]);
}
