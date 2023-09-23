import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const NavConfig = [
  {
    title: "Checkout",
    link: "/details",
  },
  {
    title: "Collections",
    link: "",
  },
  {
    title: "Blog",
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
    <NavWrapper className="mt-3">
      <div className="top d-flex justify-content-between">
        <div className="navbar-header d-flex flex-row gap-3">
          <button
            className="navbar-btn"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <Icon icon={isNavOpen ? "iconoir:cancel" : "fe:bar"} />
          </button>
          <Link className="navbar-brand" to="/">
            FerinSTORE
          </Link>
        </div>
        <div className="navbar-links d-flex gap-3">
          {NavConfig.map(({ title, link }, index) => (
            <Link className="nav-link" to={link}>
              {title}
            </Link>
          ))}
        </div>
        <div className="user-links d-flex gap-4">
        <Icon icon="fluent:cart-16-regular" className="icon"/>
        <Icon icon="mdi:user-outline" className="icon"/>
        </div>
      </div>
    </NavWrapper>
  );
}
const NavWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #5cdb95;
  padding: 10px 20px;
  border-radius: 10px;
  width: 95%;
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
  .top {
    height: 70px;
    align-items: center;
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
`;
