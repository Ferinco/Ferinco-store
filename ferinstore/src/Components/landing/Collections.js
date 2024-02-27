import styled from "styled-components";
import { Button } from "../Custom/button";
export default function Collections() {
  return (
    <CollectionsDiv className="container collections mt-5">
      <div className="header row align-items-center">
        <h4 className="col-md-6">
          Real Designs by Real Artists for Real People
        </h4>
        <div className="col-md-4 d-flex flex-column gap-2">
          <p>From our favourite Naija influencers to the best missives from Milan and coolest New Yorkers, find out more.</p>
          <Button black>Browse All Products</Button>
        </div>
      </div>
      <div className="body mt-5">
        <div className="image d-flex justify-content-left align-items-end px-3">
          <h6>african</h6>
        </div>
        <div className="image d-flex justify-content-center align-items-center">
          <h2>casual</h2>
        </div>
      </div>
      <div className="link mt-3 justify-content-center">
        see more collection
      </div>
    </CollectionsDiv>
  );
}
const CollectionsDiv = styled.div`
  padding-top: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  .header {
    h4{
      font-weight: 700;
  padding-bottom:20px ;
  font-size:40px;
  @media (max-width: 600px){
    font-size:30px;
  }
    }
    p{
      font-size: 13px;
      margin-bottom: 0;
    }
    button{
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
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .image {
    height: 300px;
    width: auto;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    h6 {
      color: black;
      text-transform: capitalize;
    }
    &:first-child {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(/Images/Collection/k-style.jpg);
    }
    &:nth-child(2) {
      background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        url(/Images/Collection/casual.avif);
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
    .body {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media screen and (max-width: 500px) {
    .body {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(1, 1fr);
    }
    .image {
      height: 400px;
      &:first-child {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)
          ),
          url(/Images/Collection/AfricanP.avif);
      }
      &:nth-child(2) {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)
          ),
          url(/Images/Collection/casualP.avif);
      }
      &:nth-child(3) {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)
          ),
          url(/Images/Collection/k-styleP.avif);
      }
      &:nth-child(4) {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)
          ),
          url(/Images/Collection/sportsP.jpg);
      }
    }
  }
  @media screen and (max-width: 991px) {
    .desktop-link {
      display: none;
    }
    .link {
      display: flex;
    }
  }
`;
