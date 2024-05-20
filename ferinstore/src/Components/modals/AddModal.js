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
  const backgroundImageStyle = {
    backgroundImage: `url(${product.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "cover",
  };
  return (
    <Slide className={openAddSlide ? "on-modal" : "off-modal"} style={{backgroundImageStyle}}>
      <div className={openAddSlide ? " on p-3 d-flex flex-column" : "off"}>
          <div className="d-flex flex-row justify-content-between">
            <button
              onClick={() => {
                setOpenAddSlide(false);
              }}
            >
              close
            </button>
            <div className="icon-div d-flex flex-row justify-content-center align-items-center">
              <Icon icon="solar:bag-2-bold" style={{ color: "white" }} />{" "}
            </div>
          </div>
        <div className="d-flex flex-column gap-3 mt-5">
          <div className="">
            <h1 className="col-6 pl-0 pr-5">{product?.name}</h1>
            <p className="col-6 p-0">
              laving ehli eggpb dfugef jh hiuhdf hid hiuuid ihiupdhf ihiuhd
              uhiudgfd fhidufid fdhfiudhif diufhdfydihf idfe fuehiufehiufehf
              dugjk
            </p>
            <h3>{product?.price}</h3>
          </div>
          <div className="d-flex flex-row justify-content-between select">
            <div className="d-flex flex-column">
              <p className="m-0">select size</p>
              <div className="d-flex flex-row gap-1">
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XLL</button>
              </div>
            </div>
            <div className="quantity d-flex flex-column">
              <p className="m-0">select size</p>
              <div className="d-flex flex-row gap-1">
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
  button {
    height: fit-content;
  }
  .action-btn {
    min-width: 220px;
    height: 40px;
  }
  .select {
    max-width: 500px !important;
  }
  .on {
    height: 100% !important;
    width: 680px;
    z-index: 999 !important;
    /* position: fixed; */
    right: 0 !important;
    margin-right: 0 !important;
    transition: 0.3s;
    backdrop-filter: blur(20px);

  }
  .off {
    backdrop-filter: blur(20px);

    transition: 0.3s;
    margin-right: -1000px !important;
  }
  .icon-div {
    background-color: black;
    height: 33px;
    width: 33px;
    border-radius: 50%;
  }
`;
