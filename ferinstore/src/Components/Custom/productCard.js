import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { PATH_PAGE } from "../../routes/path";
import { Icon } from "@iconify/react";
function ProductCard(props) {
  const [favourite, setFavourite] = useState(false);
  const [activeColor, setActiveColor] = useState(1);
  function isFavourite() {
    setFavourite(!favourite);
  }

  return (
    <Card className="item mt-4">
      <Link
        to={PATH_PAGE.details + "/" + props.id}
        style={{ textDecoration: "none", color: "black" }}
        key={props.id}
      >
        <div className="item-image">
          <img src={props.image} />
        </div>
      </Link>
      {props.category === "Top" ? (
        <div className="item-tag">
          <p className="tag">{props.tag}</p>
        </div>
      ) : (
        ""
      )}
      <div className="item-body d-flex flex-column mt-4">
        <div className="about d-flex flex-row justify-content-between">
          <p className="name">{props.name}</p>
          <Icon icon="ph:heart-light" className="icon" />
        </div>

        <h5 className="price">{props.price}</h5>
        <div className="colors d-flex flex-row gap-1">
          {props.colors &&
            props.colors.map((color) => (
              <div
                className={
                  color.id === activeColor ? "color active-color" : "color"
                }
                key={color.id}
                onClick={() => {
                  setActiveColor(color.id);
                }}
              >
                {color.name}
              </div>
            ))}
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: auto !important;
  width: auto;
  border-radius: 20px !important;
  &:hover {
    .tag {
      opacity: 0;
      transition: 0.5s;
    }
  }

  /* box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;     */
  &:first-child .item-image {
    background-image: url(./Images/backdrop_1.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-child(2) .item-image {
    background-image: url(./Images/backdrop-2.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-child(3) .item-image {
    background-image: url(./Images/backdrop-6.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-child(4) .item-image {
    background-image: url(./Images/backdrop-3.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:nth-child(5) .item-image {
    background-image: url(./Images/backdrop-4.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &:last-child .item-image {
    background-image: url(./Images/backdrop-5.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .item-image {
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 20px !important;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    &:hover {
      scale: 1.05;
      transition: 0.3s;
    }
    @media screen and (max-width: 987px) {
      border-radius: 0 !important;
    }

    img {
      width: 75%;
      margin: auto !important;
      height: 100%;
      display: block;
      object-fit: contain;
    }
  }

  .item-tag {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    margin-left: 10px;
    margin-top: 10px !important;
    font-size: 12px;
    font-weight: 600;
    color: white;
    .tag {
      background-color: transparent;
      border: 1px solid white;
      padding: 5px 10px;
      border-radius: 30px;
    }
  }
  .name {
    font-family: 500;
    font-size: 13px;
    font-weight: 500;
  }
  .icon {
    font-size: 30px;
    margin-top: -7px;
  }
  .price {
    font-weight: 700;
    color: #05386b;
    margin-top: -7px;
  }
  .color {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    cursor: pointer;
    &:first-child {
      background-color: blue;
    }
    &:nth-child(2) {
      background-color: purple;
      border: 2px solid purple;
    }
    &:nth-child(3) {
      background-color: black;
      border: 2px solid black;
    }
  }
  .active-color {
    border: 2px solid #5cdb95 !important;
  }
  @media screen and (max-width: 987px) {
    .icon {
      font-size: 20px;
      margin-top: 0px;
    }
    .item-body {
      padding: 0 5px;
    }
  }
`;
export default ProductCard;
