import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const NavConfig = [
  {
    title: "Collections",
    link: "",
  },
  {
    title: "FAQs",
    link: "",
  },
  {
    title: "About us",
    link: "",
  },
  {
    title: "Contact us",
    link: "",
  },
];
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <NavbarWrapper className="d-flex flex-row justify-content-between py-3">
      <div className="link-div d-flex flex-row gap-2 align-items-baseline gap-5"><h4 className="m-0">Logo</h4>
      <div className="links d-none d-md-flex flex-sm-row gap-3 align-items-center ">
      {
        NavConfig.map((link)=>(
          <Link className="react-router-link link m-0">{link.title}</Link>
        ))
      }
      </div>
      </div>
      <div className="search-div ">
        <div className="input-div d-flex align-items-center p-1 px-2">
          <input placeholder="Search"/> <Icon icon="iconamoon:search-thin"/>
        </div>
      </div>

    </NavbarWrapper>
  );
}
const NavbarWrapper = styled.div`
  width: 95%;
  margin: auto;
  gap: 20px;
  .link{
    font-size: 14px;
    font-weight: 600;
    margin: 0 !important;
    color: black;
  }
  .input-div{
    border: 1px solid grey;
    border-radius: 30px;
    input{
      border: 0 !important;
      outline: 0 !important;
    border-radius: 30px;

    }
  }
  @media (max-width: 370px){
    gap: 10px;
  }

  `
