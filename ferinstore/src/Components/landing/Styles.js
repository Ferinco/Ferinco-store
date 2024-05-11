import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";
import { Button } from "../Custom/button";

export default function Styles() {
  return (
    <StylesDiv className=" mt-5">
      <div className="row h-100 justify-content-between container gap-3 gap-lg-0">
        <div className="col-lg-8 left p-3">
          <div className="absolute d-flex flex-column justify-content-between">
            <div className="top d-flex justify-content-end">
              <div className="top-div d-flex justify-content-center align-items-center">
                <div className="icon-div d-flex justify-content-center align-items-center">
                  <Icon
                    icon="solar:bag-2-bold"
                    width="1.2em"
                    height="1.2em"
                    style={{ color: "white" }}
                  />
                </div>
              </div>
            </div>
            <div className="middle pl-3">
              <h2>
                Be Real, <br />
                For Your Guys!
              </h2>
            </div>
            <div className="d-flex justify-content-end">
              <p>
                lkshduifhod fdhdfds ihdisfsd; ohdsifhsd <br /> hiufdsf jhiufdif
                dhdhbfds ijiuh{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 right d-flex flex-column justify-content-between px-0 px-lg-2 gap-2">
          <div className="sub-right p-3 d-flex flex-column justify-content-between">
            <div></div>
            <div className="d-flex flex-column gap-2">
              <Button>ferinco.com</Button>
              <div>
                <h4 className="m-0">Experience Fashion</h4>
                <h4 className="m-0">Excellence For You!</h4>
              </div>
            </div>
          </div>
          <div className="sub-right p-2">
          <div className="absolute d-flex flex-column justify-content-between">
            <div className="top d-flex justify-content-end">
              <div className="top-div d-flex justify-content-center align-items-center">
                <div className="icon-div d-flex justify-content-center align-items-center">
                  <Icon
                    icon="solar:bag-2-bold"
                    width="1.2em"
                    height="1.2em"
                    style={{ color: "white" }}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <p>
                lkshduifhod fdhdfds  <br /> hiufdsf jhiufdif.
                {" "}
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </StylesDiv>
  );
}
const StylesDiv = styled.div`
  width: 100%;
  .container {
    margin: auto;
  }
  .right {
    height: 550px;
  }
  .sub-right {
    &:first-child {
      background-color: #74bc8f;
    }
    &:nth-child(2) {
      background-color: #74bc8f;
      border-radius: 20px;
      background-image: url(/Images/collection_2.png);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    Button {
      border: 0 !important;
    }
  }
  .absolute {
    width: 100%;
    border-radius: 20px;
    height: 100%;
  }
  .top {
    width: 100%;
    border-radius: 20px;
    .top-div {
      height: 70px;
      background-color: transparent;
      width: 70px;
      border-radius: 50%;
      z-index: 999;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background-color: white;
      }
    }
    .icon-div {
      background-color: black;
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
  }
  .left {
    height: 100%;
    border-radius: 20px;
    background-image: url(/Images/collection_1.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    height: 550px;
    h2 {
      font-size: 40px;
      font-weight: 800 !important;
      color: white;
    }
  }
  .sub-right {
    height: 100%;
    border-radius: 20px !important;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      p{
        color: white;
        margin: 0 !important;
      }
  }
`;
