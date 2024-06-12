import styled from "styled-components";
import { Button } from "../Custom/button";
export default function Collections() {
  return (
    <CollectionsDiv className="container mt-5 ">
      <div className="header row align-items-center">
        <h4 className="col-md-6">
          Real Designs by Real Artists for Real People
        </h4>
        <div className="col-md-4 d-flex flex-column gap-2">
          <p>
            From our favourite Naija influencers to the best missives from Milan
            and coolest New Yorkers, find out more.
          </p>
          <Button transparent>Browse All Products</Button>
        </div>
      </div>
      <div className="body mt-3 d-flex no-wrap gap-3">
        <div className="image d-flex justify-content-left align-items-end px-3">
          <div className="d-flex flex-column p-2 gap-2">
            <p>
              Culture Store:
              <br /> Channel Your <span>Culture</span>
            </p>
          </div>
        </div>
        <div className="image d-flex justify-content-left align-items-end px-3">
          <div className="d-flex flex-column p-2 gap-2">
            <p>
              Time Travel:
              <br /> Explore The Next Gen.
            </p>
          </div>
        </div>
      </div>
    </CollectionsDiv>
  );
}
const CollectionsDiv = styled.div`
  padding-top: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  overflow-x: visible;
  width: 100%;
  @media screen and (max-width:474px){
    .image{
      width: 350px !important;
      height: 270px !important;
    }
  }
  Button {
    padding: 10px 20px;
    font-weight: 700 !important;
  }
  .header {
    h4 {
      font-weight: 700;
      padding-bottom: 20px;
      font-size: 40px;
      @media (max-width: 600px) {
        font-size: 30px;
      }
    }
    p {
      font-size: 13px;
      margin-bottom: 0;
    }
    button {
      font-size: 13px;
      width: fit-content;
      color: white;
      padding: 5px 20px;
      border: 1px solid black;
      border-radius: 30px;
      background-color: black;
      font-weight: 600;
    }
    .desktop-header {
      font-weight: 800 !important;
      font-size: 40px;
      width: 70%;
      @media (max-width: 600px) {
        font-size: 30px;
        width: 93%;
      }
    }
    .mobile-header {
      display: none;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body {
    width: fit-content;
    display: flex;
    flex-wrap: nowrap !important;
    overflow-x: scroll !important;
    p {
      color: white;
      font-weight: 500;
      font-size: 20px;
      line-height: 1.2;
    }
  }
  .image {
    height: 300px;
    width: 556px;
    background-position: top;
    background-size: cover;
    border-radius: 20px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
    h6 {
      color: black;
      text-transform: capitalize;
    }
    &:first-child {
      background-image: url(/Images/collection_1.png);
    }
    &:nth-child(2) {
      background-image: url(/Images/collection_2.png);
    }
  }
  .link {
    display: none;
    background-color: #5cdb95;
    padding: 10px;
    justify-content: center;
    border: 0;
    border-radius: 20px;
    color: white;
    font-size: 30px;
  }
  @media screen and (min-width: 500px) and (max-width: 768px) {

  }
  @media screen and (max-width: 500px) {
  }
  @media screen and (max-width: 991px) {
    .desktop-link {
      display: none;
    }
    .link {
      display: flex;
    }
  }
  @media screen and (min-width: 991px) {
    .body{
      width: 100%;
    }
    .image {
    width: 50% !important;


  }
  }
`;
