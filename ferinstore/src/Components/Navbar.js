import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import { Icon } from '@iconify/react';
export default function Navbar(){
    return(
<NAV>
<input type="checkbox" id="check"/>

<Link className="navbar-brand" to="/">FerinSTORE</Link>
<ul className="navbar-nav">
  <li className="nav-item active">
      <Link className="nav-link" to="/details">Checkout</Link>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="#">Collections</a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
     </li>
     <li className="nav-item"> 
     <a className="nav-link" href="#">FAQs</a>
       </li>
</ul>
<label for="check" className="checkbtn">
<Icon icon="fe:bar" />
</label>
</NAV>
    )
}
const NAV = styled.div `
margin: 0 !important;
display: flex;
flex-direction: row;
  background: rgb(143, 241, 143);
 align-items: center;
  padding: 10px 20px;
  height: 70px;
  border-radius: 10px;
width: 100% !important;
 justify-content: space-between !important;
 .navbar-nav{
    gap: 10px;
    display: flex;
    flex-direction: row;
    a{
      padding-bottom: 5px;
      &:hover{
         
         border-bottom:  1px solid rgb(243, 255, 243);
       }
    }
  }
.checkbtn{
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check{
  display: none;
}
@media (max-width: 952px){

  nav ul li a{
    font-size: 16px;
  }
}
@media (max-width: 858px){
  .checkbtn{
    display: block;
  }
  ul{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
  }
 NAV ul li{
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
 NAV ul li a{
    font-size: 20px;
  }
  a:hover,a.active{
    background: none;
    color: #0082e6;
  }
  #check:checked ~ ul{
    left: 0;
  }
}
section{
  background: url(bg1.jpg) no-repeat;
  background-size: cover;
  height: calc(100vh - 80px);
}
`