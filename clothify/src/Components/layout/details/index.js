import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../footer";
import styled from "styled-components";
import AddModal from "../../modals/AddModal";
import Alert from "../../Custom/alert";
export default function DetailsLayout (){
  return(
    <div className="d-flex flex-column">
<Alert/>
    <Div className="d-flex flex-row">
    <div className="pb-5 w-100 outlet">
      <Navbar/>
      <Outlet/> 
    </div>
    <AddModal/>
    </Div>
    </div>
  )
} 
const Div = styled.div`
.outlet{

}
`