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
import { useAppContext } from "../contexts/appContext";
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
  const { openAddSlide, setOpenAddSlide } = useAppContext();
  console.log(openAddSlide);
  //function to handle add to cart
  function addToCart() {
    dispatch(toggleModal(true));
    setIsAdded(true);
    console.log(product);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  }

  const closeModal = () => {
    dispatch(toggleModal(false));
  };
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "details") {
      dispatch(toggleModal(false));
    }
  }, []);
  return (
    <Wrapper className="d-flex flex-column gap-4 container">
      <div className="row p-4 main">
        <div className="col-md-6 left d-flex justify-content-center align-items-center">
          <div className="image  d-flex flex-column align-items-center justify-content-center">
            <img src={"." + product.image} />
          </div>
        </div>
        <div
          className={
            openAddSlide
              ? "d-none"
              : "col-md-6 d-flex flex-column px-4 justify-content-between"
          }
        >
          <div className="top-div row">
            <div className="col-6">
              <h1>{product.name}</h1>
              <h3>{product.price}</h3>
              <Button
                transparent
                onClick={() => {
                  setOpenAddSlide(true);
                }}
              >
                Add
              </Button>
            </div>
            <div className="col-6 d-flex flex-column gap-3">
              <div>
                <h6>Info</h6>
                <p>
                  laving ehli eggpb dfugef jh hiuhdf hid hiuuid ihiupdhf ihiuhd
                  uhiudgfd fhidufid fdhfiudhif diufhdfydihf idfe fuehiufehiufehf
                  dugjk
                </p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p>chuif ehe8hde ug8ge uhiugoe gugdu uugg</p>
                <Icon icon="ph:heart-light" className="icon" />
              </div>
            </div>
          </div>
          <div className="bottom-div d-flex flex-row justify-content-between">
            <div className=" small-img">
              <img src={"." + product.image} />
            </div>
            <div className="small-img">
              <img src={"." + product.image} />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="text-center ">
          <h4 className="bottom-header">YOU WILL LIKE</h4>
        </div>
        <div className="relateds d-flex flex-row gap-3">
          {relateds.map((related) => (
            <div className="d-flex flex-column p-3 gap-1 ">
              <div className="image p-3">
                <img src={"." + related.image} />
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center gap-2 no-wrap">
                <p>{related.name}</p>
                <h4>{related.price}</h4>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>

      {/* {modalOpen === true ? (
      <div className="d-flex justify-content-center modal-field align-items-center" onClick={closeModal}>
          <CartModal
            image={"/" + product.image}
            id={product.id}
            quantity={product.quantity}
          />
      </div>
        ) : (
          ""
          )
      } */}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* background-color: #f9f9f9 !important; */
  overflow-x: hidden;
  .icon {
    font-size: 40px;
  }
  h1 {
    text-transform: uppercase;
    line-height: 0.9;
  }
  p,
  h6,
  h3,
  h4 {
    margin: 0 !important;
  }
  p {
    font-size: 14px;
  }
  .main {
    min-height: 600px;
    /* border: 1px solid red; */
    .col-md-6 {
      /* border: 1px solid green; */
    }
  }
  .left {
    background-image: url(/Images/backdrop-6.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .image {
      width: 450px;
      height: 450px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .small-img {
    background-image: url(/Images/backdrop-6.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 300px;
    width: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .relateds {
    overflow-x: auto;
    width: 100% !important;
    p {
      color: black;
      font-weight: 500;
      font-size: 13px;
      line-height: 1.1;
    }
    h4 {
      font-size: 21px;
    }
    .image {
      width: 200px;
      height: 200px;
      background-color: #e4e6e1;
      border-radius: 15px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .bottom-header {
    font-weight: 500;
    font-size: 18px !important;
  }
  .related {
    &:first-child .image {
      background-image: url(/Images/backdrop-2.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    &:nth-child(2) .image {
      background-image: url(/Images/backdrop_1.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    &:nth-child(3) .image {
      background-image: url(/Images/backdrop-6.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    &:nth-child(4) .image {
      background-image: url(/Images/backdrop-3.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    &:nth-child(5) .image {
      background-image: url(/Images/backdrop-4.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    &:last-child .image {
      background-image: url(/Images/backdrop-5.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
`;
