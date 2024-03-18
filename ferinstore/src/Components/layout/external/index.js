import React from "react"
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import styled from "styled-components";
export default function ExternalLayout (){
  return(
    <Div className="pb-5">
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </Div>
  )
} 
const Div = styled.div`
`