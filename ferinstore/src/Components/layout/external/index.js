import React from "react"
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export default function ExternalLayout (){
  return(
    <>
      <Navbar/>
      <Outlet/>  
    </>
  )
} 