import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Data from "../Data/Data";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
import { Button } from "../Components/Custom/button";
import CartModal from "../Components/modals/CartModal";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addItem, toggleModal } from "../redux/slices/cartSlice";

export default function Details() {
  const params = useParams();
  const { modalOpen } = useSelector((state) => state.cart);
  console.log(params.id);
  const data = Data.filter((item) => Number(params.id) === item.id);
  const product = data[0];
  const relateds = Data.filter((item) => item.category === product.category);
  // const [cartModal, setCartModal] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  //function to handle add to cart
  function addToCart() {
    dispatch(toggleModal(true));
    setIsAdded(true);
    console.log(product);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  }
  const location = useLocation()
useEffect(()=>{
if (location.pathname !== "details") {
  dispatch(toggleModal(false))
  
}
},[])
  return (
    <Wrapper className="d-flex flex-column">
      <div className="div mt-5 gap-5 d-flex flex-row justify-content-between">
        <div className="left">
          <div className="details  d-flex flex-row p-5 align-items-center gap-5">
            <div className="image">
              <img src={"." + product.image} />
            </div>
            <div className="about">
              <div className="header">
                <h3>{product.name}</h3>{" "}
                <button
                  className="fa fa-heart fa-2x"
                  style={{
                    backgroundColor: "transparent",
                    padding: "0",
                    color: "#f5f5f5",
                    border: "0",
                  }}
                ></button>
              </div>
              <p>{product.category}</p>
              <h5>{product.price}</h5>
              <p className="rate">
                <i className="fa fa-star" />
                {product.rating}
              </p>
              <div className="button">
                <Button
                  blue
                  className={`btn ${isAdded ? "added" : ""}`}
                  onClick={addToCart}
                >
                  {isAdded ? "Added" : "Add to cart"}
                </Button>
                {/* <Button
                  transparent
                  border
                  className={`btn ${isAdded ? "added" : ""}`}
                  onClick={addToCart}
                >
                  
                </Button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="right ">
          <div className="related">
            {relateds.map((related) => (
              <div className="image">
                <img src={"." + related.image} />
                <div className="price">
                  <h3>
                    <Icon icon="solar:tag-linear" />
                    {related.price}
                  </h3>
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
        {modalOpen === true ? (
      <div className="d-flex justify-content-center modal-field align-items-center">
          <CartModal
            image={"/" + product.image}
            id={product.id}
            quantity={product.quantity}
          />
      </div>
        ) : (
          ""
          )
      }
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .div {
    width: 95%;
    margin: auto;
    gap: 20px;
    height: 79vh;
    /* overflow: hidden; */
    .left {
      width: 70%;
      background-color: #f5f5f5;
      border-radius: 20px;
      height: fit-content;
      .image {
        width: 350px;
        height: 350px;
        background-color: rgb(243, 255, 243);
        border-radius: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .button {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
    }
    .right {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* background-color: #f5f5f5; */
      .related {
        padding: 0 !important;
        margin: 0 !important;
        border-radius: 10px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        overflow: auto;
        gap: 30px;
        background-color: white;
        .image {
          width: 80%;
          margin: auto;
          height: 250px;
          background-color: rgb(243, 255, 243);
          border-radius: 20px;
          padding: 20px;
          img {
            object-fit: contain;
            height: 100%;
            width: 100%;
            display: block;
          }
          .price {
            margin-top: -20%;
            z-index: 999 !important;
            justify-content: right;
            display: flex;
            h3 {
              background: #05386b;
              border-radius: 20px;
              padding: 10px;
              width: 50%;
              display: flex;
              gap: 5px;
              color: white;
            }
          }
        }
      }
    }
  }
  .modal-field {
    position: absolute;
    border: 1px solid green;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    background-color: rgba(192, 192, 192, 0.5);
    top: 0;
  }
`;
