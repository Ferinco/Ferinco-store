import React from "react"
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
export default function ExternalLayout (){
  return(
    <div className="pb-5">
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </div>
  )
} 