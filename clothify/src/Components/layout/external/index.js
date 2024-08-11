import React from "react"
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../footer";
import styled from "styled-components";
import AddModal from "../../modals/AddModal";
export default function ExternalLayout (){
  return(
    <Div className="d-flex flex-row">
    <div className="pb-5 w-100 outlet">
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </div>
    </Div>
  )
} 
const Div = styled.div`
.outlet{

}
`