import { Icon } from "@iconify/react";
import styled from "styled-components";
import { Button } from "../Custom/button";

export default function BrowseSection() {
  return (
    <Wrapper className="d-flex flex-column container mt-4 gap-5">
      <div className="top-div">
        <img src="/Images/couple.png" />
        <div className="absolute-div d-flex justify-content-start p-3">
          <div className="d-flex flex-column justify-content-end align-items-start info gap-2">
          <h4>Grab Exciting and Special Deals for You and Yours</h4>
          <div className="buttons d-flex flex-row gap-1 justify-content-end align-items-end">
            <Button black>View</Button>
            <button className="icon-div"><Icon icon="gg:arrow-top-right"  style={{color: "black"}} className="icon"/></button>
          </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column p-4 gap-3">
        <div className="d-flex flex-row justify-content-between align-items-end">
          <div className="small-image">
            <img src="/Images/fashion_1.jpg" />
          </div>
          <h1 className="m-0 text-center px-3">
            Elevate your look with our outstanding collection
          </h1>
          <div className="small-image">
            <img src="/Images/fashion_3.jpg" />
          </div>{" "}
        </div>
        <div className=" d-flex flex-row justify-content-between align-items-top">
          <div className="small-image">
            <img src="/Images/fashion_3.jpg" />
          </div>{" "}
          <Button transparent>Browse Collection</Button>
          <div className="small-image">
            <img src="/Images/fashion_3.jpg" />
          </div>{" "}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  .top-div {
    height: 450px;
    border-radius: 20px;
    background-color: #e4e6e1;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
    .absolute-div {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 20px;
      z-index: 99 !important;
      .icon{
        height: fit-content !important;
      }
      .info{
        max-width: 350px;
        h4{
          font-size: 30px;
          color: black;
        }
      }
      button {
        height: fit-content;
      }
    }
  }
  button{
    height: fit-content;
&:last-child{
  padding: 4px 8px;
  border: 1px solid black;
  color: black;
  border-radius: 50%;
    background-color: transparent;
}
  }
  .small-image {
    height: 200px;
    width: 200px;
    border-radius: 20px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
  h1 {
    font-weight: 700;
  }
  button {
    height: fit-content;
  }
`;
