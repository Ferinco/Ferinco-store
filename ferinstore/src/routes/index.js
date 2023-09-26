import React from "react";
import { useRoutes } from "react-router-dom";
import ExternalLayout from "../Components/layout/external";
import Home from "../Pages/Home";
import Details from "../Pages/Details";

export default function Routes(product) {
  return useRoutes([
    {
     
      element: <ExternalLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: `/details`, element: <Details /> }

      ],
    },
 
  ]);
}
