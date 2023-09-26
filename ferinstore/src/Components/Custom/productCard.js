import { Link } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import styled from "styled-components"
function ProductCard(props) {
  const [favourite, setFavourite] = useState(false);
    function isFavourite() {
        setFavourite(!favourite);
      }
  return (
    <Link
    to={`/details/${props.id}`}
    style={{ textDecoration: "none", color: "black" }}
  >
    <Card className="item">
      <div className="item-image">
        <img src={props.image} />
      </div>
      {props.category === "Top" ? (
        <div className="item-tag">
          <p className="tag">{props.tag}</p>
        </div>
      ) : (
        ""
      )}
      <div className="item-body">
        <div className="about">
          <p className="name">{props.name}</p>
          <h5 className="price">{props.price}</h5>
          <p className="rate">
            <i className="fa fa-star" />
            {props.rating}
          </p>
        </div>
        <div className="shop">
          <button
            className="fa fa-heart fa-2x"
            onClick={isFavourite}
            style={{
              color: favourite ? "green" : "rgb(243, 255, 243)",
              backgroundColor: "transparent",
              padding: "0",
            }}
          ></button>
          <button className="fa fa-cart"></button>
        </div>
      </div>
    </Card>
  </Link>
  )
}
const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    .item-image {
      height: 300px;
      background-color: rgb(243, 255, 243);
      border-radius: 10px;
      position: relative;
      display: flex;
      align-items: center;
      img {
        width: 90%;
        margin: auto !important;
        height: 100%;
        object-fit: contain;
        position: absolute;
      }
    }
    .item-tag {
      position: absolute;
      width: 270px;
      display: flex;
      padding: 10px;
      justify-content: flex-end;
      .tag {
        background-color: #5cdb95;
        padding: 5px 10px;
        border-radius: 30px;
      }
    }
    .item-body {
      width: 100%;
      display: flex;
      padding: 5px;
      justify-content: space-between;
      align-items: center;
      height: auto;
      .about {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 80%;
        .name,
        .price,
        .rate {
          margin: 0 !important;
        }
        .rate {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 0 !important;
          i {
            padding-right: 5px;
          }
        }
      }
      .shop {
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        height: 100%;
        background: transparent;
        button {
          border: 0;
          padding: 0;
          background-color: transparent;
        }
      }
    }
  `
export default ProductCard