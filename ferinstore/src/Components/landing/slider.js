import styled from "styled-components";
import { Button } from "../Custom/button";

export default function SliderDiv() {
  return (
    <Wrapper className="d-flex flex-row container mt-4">
      <div className="divs ">
        <div className="test d-flex flex-row gap-4">
          <div className="div d-flex flex-column d-flex justify-content-start">
            <img src="/Images/vacation.png" />
            <div className="absolute d-flex flex-row justify-content-end align-items-end h-100 p-2">
              <Button transparent>Vacation outfit</Button>
            </div>
          </div>
          <div className="div d-flex flex-column d-flex justify-content-start">
          <img src="/Images/collection_4.png" />
            <div className="absolute d-flex flex-row justify-content-end align-items-end h-100 p-2">
              <Button transparent>Casual outfit</Button>
            </div>
          </div>{" "}
          <div className="div d-flex flex-column d-flex justify-content-start">
          <img src="/Images/sports.png" />
            <div className="absolute d-flex flex-row justify-content-end align-items-end h-100 p-2">
              <Button transparent>Sports Outfit</Button>
            </div>
          </div>
          <div className="div d-flex flex-column d-flex justify-content-start">
            <img src="/Images/fashion_3.jpg" />
            <div className="absolute d-flex flex-row justify-content-end align-items-end h-100 p-2">
              <Button transparent>Vacation outfit</Button>
            </div>
          </div>{" "}
          <div className="div d-flex flex-column d-flex justify-content-start">
            <img src="/Images/fashion_3.jpg" />
            <div className="absolute d-flex flex-row justify-content-end align-items-end h-100 p-2">
              <Button transparent>Vacation outfit</Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: auto;
  width: auto !important;
  overflow-x: visible;
  .divs {
    overflow-x: visible;
  }
  .test {
    width: 2000px !important;
    overflow-x: scroll !important;
  }
  .div {
    border-radius: 20px;
    height: 300px;
    overflow: hidden;
    position: relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px !important;
    .absolute {
      position: absolute;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:first-child {
      width: 550px;
      
    }
    &:nth-child(2) {
      width: 270px;
      img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center !important;
    }
    }
    &:nth-child(3) {
      width: 270px;
      object-position: right !important;

    }
    &:nth-child(4) {
      width: 400px;
    }
    &:nth-child(5) {
      width: 270px;
    }
  }
`;
