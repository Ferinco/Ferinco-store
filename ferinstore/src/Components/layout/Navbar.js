import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useAppContext } from "../../contexts/appContext";

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
  const { openSidebar, setOpenSidebar } = useAppContext();
  const [isNavOpen, setIsNavOpen] = useState(false);
  console.log(openSidebar);
  return (
    <NavbarWrapper className=" d-flex flex-column">
      <div className="desktop-navbar d-flex flex-row justify-content-between py-3">
        <div className="link-div d-flex flex-row gap-2 align-items-baseline gap-5">
          <h4 className="m-0 d-flex flex-row gap-1 align-items-center">
            {" "}
            <button
              onClick={() => {
                setOpenSidebar((prev) => !prev);
              }}
              className="d-flex d-md-none menu-btn"
            >
              <Icon icon="bx:menu-alt-right" style={{ color: "black" }} />{" "}
            </button>
            clothify.
          </h4>
          <div className="links d-none d-md-flex flex-sm-row gap-3 align-items-center ">
            {NavConfig.map((link) => (
              <Link className="react-router-link link m-0">{link.title}</Link>
            ))}
          </div>
        </div>
        <div className="d-flex flex-row align-items-center gap-1">
          <div className="search-div ">
            <div className="input-div d-flex align-items-center p-1 px-2">
              <input placeholder="Search" />{" "}
              <Icon icon="iconamoon:search-thin" />
            </div>
          </div>
          <div className="icon-div d-flex flex-row justify-content-center align-items-center">
            <Icon icon="solar:bag-2-bold" style={{ color: "white" }} />{" "}
          </div>
        </div>
      </div>
      <div
        className={
          openSidebar
          ? "d-flex flex-column gap-3 d-md-none opened mobile-navbar"
          : "d-flex flex-column gap-3 d-md-none closed mobile-navbar"
        }
      >
     <div className="d-flex flex-row justify-content-between p-3 align-items-center">
      <h3>Ferinstore</h3>
     <button
          onClick={() => {
            setOpenSidebar((prev) => !prev);
          }}
        >
          M
        </button>
     </div>
     <div className="d-flex flex-column justify-content-center align-items-center mt-5 gap-4 ">
      <h3>About</h3>
      <h3>Top Collections</h3>
      <h3>Our Designers</h3>
      <h3>Reach Out</h3>
      <h3>Faqs</h3>

     </div>
      </div>
    </NavbarWrapper>
  );
}
const NavbarWrapper = styled.div`
  .desktop-navbar {
    width: 95%;
    margin: auto;
    gap: 20px;
  }
  .menu-btn {
    border: 0;
    background: transparent;
  }
  .icon-div {
    background-color: black;
    height: 33px;
    width: 33px;
    border-radius: 50%;
  }
  .link {
    font-size: 14px;
    margin: 0 !important;
    font-weight: 600;
    color: #414040;
    &:hover {
      color: black;
      font-weight: 600;
      transition: 0.3s;
    }
  }
  .input-div {
    border: 1px solid grey;
    border-radius: 30px;
    width:200px;
    justify-content: space-between;
    input {
      width: 90%;
      border: 0 !important;
      outline: 0 !important;
      border-radius: 30px;
    }
  }
  @media (max-width: 370px) {
    gap: 10px;
  }
  .mobile-navbar {
    width: 100%;
    height: 100vh;
    background-color: white;
    position: fixed;
    z-index: 999;
  }
  .closed {
    margin-left: -1000px;
    transition: 0.3s;
  }
  .opened {
    margin-left: 0;
    transition: 0.3s;
  }
`;
