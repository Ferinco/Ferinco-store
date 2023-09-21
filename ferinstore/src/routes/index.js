import React from "react";
import { useRoutes } from "react-router-dom";
import ExternalLayout from "../Components/layout/external";
import Home from "../Pages/Home";
// import Details from "../Pages/Details";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <ExternalLayout />,
      children: [
        { path: "/", element: <Home /> }
      ],
    },
    {
        
    } 
  ]);
}
