import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Button } from "../Custom/button";

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
];
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <NAV>
      <div className="top">
        <Link className="navbar-brand" to="/">
          FerinSTORE
        </Link>
        <ul className="navbar-nav">
          {NavConfig.map(({ title, link }, index) => (
            <li>
            <Link className="nav-link" to={link}>
              {title}
            </Link>
            </li>
          ))}
        </ul>
        <button
          className="navbar-btn"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <Icon icon={isNavOpen ? "iconoir:cancel" : "fe:bar"} />
        </button>
      </div>
      <div className={`mobile-nav ${isNavOpen ? "opened" : "closed"}`}>
        <ul>
          <li className="nav-item active">
            <Link className="nav-link" to="/details">
              Checkout
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Collections
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              FAQs
            </a>
            <a className="nav-link" href="#">
              <Button>
                <Icon icon="ion:cart-sharp" className="icon" />
              </Button>
            </a>
            <a className="nav-link" href="#">
              <Button>
                <Icon icon="iconamoon:profile-fill" color="gray" />
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </NAV>
  );
}
const NAV = styled.div`
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  background: #5cdb95;

  padding: 10px 20px;

  border-radius: 10px;
  width: 100% !important;
  .navbar-btn {
    display: none;
  }
  .top {
    display: flex;
    flex-direction: row;
    height: 70px;
    align-items: center;
    justify-content: space-between !important;
  }
  .mobile-nav {
    display: none;
  }
  .navbar-nav {
    gap: 10px;
    display: flex;
    flex-direction: row;
    a {
      padding-bottom: 5px;
      &:hover {
        border-bottom: 1px solid rgb(243, 255, 243);
      }
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
