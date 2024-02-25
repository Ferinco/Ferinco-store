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
    <NavbarWrapper className="d-flex flex-row">

    </NavbarWrapper>
  );
}
const NavbarWrapper = styled.div`
  width: 95%;
  margin: auto;
  gap: 20px;
  @media (max-width: 370px){
    gap: 10px;
  }

  `
const LeftBar = styled.div`
  margin: auto;
  display: flex;
  background: #5cdb95;
  padding: 10px 20px;
  border-radius: 10px;
  width: 70%;
  height: 70px;
  .navbar-brand {
    font-weight: 700;
    font-size: 25px;
  }
  .nav-link {
    font-weight: 700;
    &:hover{
      color: grey;
      transition: 0.3s;
    }
  }
  .navbar-btn {
    display: none;
  }

  .mobile-nav {
    display: none;
  }
.user-links{
  .icon{
    font-size:25px;
  }
}
  @media (max-width: 952px) {
    ul li a {
      font-size: 19px !important;
    }
  }
  @media (max-width: 858px) {

    .navbar-nav {
      display: none;
    }
    .navbar-links{
      display: none !important;
    }
    .navbar-btn {
      display: block;
      background: transparent;
      border: none;
    }
    .closed {
      display: none !important;
    }
    .opened {
      width: 100%;
      display: flex;
      flex-direction: column;
      /* position: fixed; */
      height: 50vh;
      background-color: #5cdb95;
      transition: ease-in-out cubic-bezier(0.55, 0.055, 0.675, 0.19);
      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0 !important;

        li {
          list-style: none;

          &:hover {
          }
        }
      }
    }
  }
  @media (max-width: 370px){
    width: 85%;
  }
`;
const RightBar= styled.div`
width: 30%;
margin: auto;
  display: flex;
  flex-direction: column;
  background: #5cdb95;
  padding: 10px 20px;
  border-radius: 10px;
  height: 70px;
  @media (max-width: 370px){
    width: 15%;
    justify-content: center !important;
    .user-links{
      flex-direction: column-reverse !important;
}
  }
`