import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppContext } from "../../contexts/appContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Data from "../../Data/Data";
import { Button } from "../Custom/button";

export default function AddModal() {
  const { openAddSlide, setOpenAddSlide } = useAppContext();
  const params = useParams();
  const data = Data.filter((item) => Number(params.id) === item.id);
  const product = data[0];
  console.log(product.image);
  const backgroundImageStyle = {
    backgroundImage: `url(/Images/backdrop-6.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "cover",
  };
  return (
    <Slide
      className={openAddSlide ? "on-modal" : "off-modal"}
      style={{ backgroundImageStyle }}
    >
      <div
        className={openAddSlide ? " on py-3 px-4 d-flex flex-column " : "off"}
      >
        <div className="d-flex flex-row justify-content-between select">
          <button
            onClick={() => {
              setOpenAddSlide(false);
            }}
            className="close-btn"
          >
            <Icon icon="mingcute:arrow-right-line" width="1.2em" height="1.2em"  style={{color: "black", fontSize: "20px"}} />
          </button>
          <div className="icon-div d-flex flex-column justify-content-center align-items-center">
            <Icon icon="ion:cart-outline"  style={{ color: "black", fontSize: "25px" }} />{" "}
            <div className="number-div">0</div>
          </div>
        </div>
        <div className="d-flex flex-column gap-3 mt-5 select py-5">
          <h1 className="name m-0">{product?.name}</h1>
          <div className="d-flex justify-content-between align-items-end">
            <p className="col-7 p-0 m-0 about">
              laving ehli eggpb dfugef jh hiuhdf hid hiuuid ihiupdhf ihiuhd
              uhiudgfd fhidufid fdhfiudhif diufhdfydihf idfe fuehiufehiufehf
              dugjk
            </p>
            <div className="d-flex flex-column gap-2">
            <Icon icon="ri:share-line" width="1.2em" height="1.2em"  style={{color: "black", fontSize: "15px" }} />
              <div>
                <Icon
                  icon="hugeicons:favourite"
                  width="1.2em"
                  height="1.2em"
                  style={{ color: "black", fontSize: "15px" }}
                />
              </div>
            </div>
          </div>
          <h3 className="price">{product?.price}</h3>
          <div className="d-flex flex-row justify-content-between select">
            <div className="d-flex flex-column">
              <p className="m-0">select size</p>
              <div className="d-flex flex-row gap-2 sizes">
                <button className="px-2 py-1">XS</button>
                <button className="px-2 py-1">S</button>
                <button className="px-2 py-1">M</button>
                <button className="px-2 py-1">L</button>
                <button className="px-2 py-1">XL</button>
                <button className="px-2 py-1">XLL</button>
              </div>
            </div>
            <div className="d-flex flex-column">
              <p className="m-0">quantity</p>
              <div className="d-flex flex-row justify-content-between quantity py-1 px-2 gap-2">
                <button>-</button>
                <div>1</div>
                <button>+</button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between select mt-5">
            <Button transparent className="action-btn">
              {" "}
              Add To Cart
            </Button>
            <Button className="action-btn">Buy Now</Button>
          </div>
        </div>
      </div>
    </Slide>
  );
}
const Slide = styled.div`
  height: 100vh;
  position: fixed;
  right: 0 !important;
  transition: 0.3s;
  border-left: 1px solid grey;
  .close-btn{
    border: 0 !important;
    background: transparent;
  }
  .number-div{
    text-align: center;
    position: absolute;
z-index: 999;
border: 1px solid #05386b;
background-color: #05386b; 
color: white;
font-size: 10px !important;
margin-left: 18px;
margin-bottom:18px ;
font-weight: 700 !important;
width: 18px;
height: 18px;
border-radius: 50%;
 }
  .price {
    color: #325221;
    font-weight: 500;
    font-size: 30px;
  }
  .about {
    font-size: 14px;
  }
  .name {
    max-width: 200px;
    line-height: 1;
  }
  .sizes {
    button {
      border: 1px solid #325221;
      background: transparent;
      border-radius: 7px;
      font-size: 14px;
      width: 40px;
      height: 36px;
    }
  }
  button {
    height: fit-content;
  }
  .action-btn {
    min-width: 220px;
    height: 50px;
    border-radius: 10px;
    &:nth-child(2) {
      background-color: #05386b;
      color: white;
      border: #325221;
    }
  }
  .select {
    max-width: 450px !important;
  }
  .on {
    height: 100% !important;
    width: 570px;
    z-index: 999 !important;
    /* position: fixed; */
    right: 0 !important;
    margin-right: 0 !important;
    transition: 0.3s;
    backdrop-filter: blur(20px);
  }
  .quantity {
    border: 1px solid #325221 !important;
    width: fit-content;
    border-radius: 7px;
    button {
      border: none !important;
      background-color: transparent;
    }
  }
  .off {
    backdrop-filter: blur(20px);

    transition: 0.3s;
    margin-right: -1000px !important;
  }
  .icon-div {
    background-color: transparent;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    position: relative;
  }
`;
