import { Link } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import styled from "styled-components"
import { PATH_PAGE } from "../../routes/path";
function ProductCard(props) {
  const [favourite, setFavourite] = useState(false);
    function isFavourite() {
        setFavourite(!favourite);
      }
      
  return (
    <Link
    to={PATH_PAGE.details + '/' + props.id}
    style={{ textDecoration: "none", color: "black" }}
    key={props.id}
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
      <div className="item-body d-flex flex-column mt-4">
        <div className="about d-flex flex-row justify-content-between">
          <p className="name">{props.name}</p>
          <h5 className="price">{props.price}</h5>
        </div>
        <div className="shop">
          <p className="rate">
            <i className="fa fa-star" />
            {props.rating}
          </p>
        </div>
      </div>
    </Card>
  </Link>
  )
}
const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: auto !important;
    width: auto;
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;    
    .item-image {
      height: 300px;
      background-color: rgb(243, 255, 243);
      border-radius: 10px;
      position: relative;
      display: flex;
      align-items: center;
      img {
        width: 70%;
        margin: auto !important;
        height: 90%;
        display: cover;
        object-fit: contain;
      }
    }
    .item-tag {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      margin-left: 10px;
      margin-top: 10px !important;
      .tag {
        background-color: #5cdb95;
        padding: 5px 10px;
        border-radius: 30px;
      }
    }
    .name{
        font-family: 500;

    }
    .price{
        font-family: 700;
    }

  `
export default ProductCard