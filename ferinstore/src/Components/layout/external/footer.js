import styled from "styled-components";
import { Button } from "../../Custom/button";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <Wrapper className="mt-5">
      <div className="row py-5 container">
        <div className="col-md-3 col d-flex justify-content-center">
          <div className="d-flex flex-column gap-3">
            <h4 className="m-0">Logo</h4>
            <div className="d-flex flex-row gap-1"></div>
          </div>
        </div>
        <div className="col-md-8 col d-flex flex-column gap-3 px-3 justify-content-between mx-auto">
          <div className="top-div d-flex flex-row justify-content-between gap-3">
            <div className="d-flex flex-column gap-2">
              <h6 className="m-0">Top Categories</h6>
              <div className="d-flex flex-column">
                <p className="m-0 link">Top Caps</p>
                <p className="m-0 link">Hot Jackets</p>
                <p className="m-0 link">Wrist Watches</p>
                <p className="m-0 link">Top Shirts</p>
                <p className="m-0 link">Shorts</p>
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <h6 className="m-0">Speacial Deals</h6>
              <div className="d-flex flex-column">
                <p className="m-0 link">Couple Zone</p>
                <p className="m-0 link">Sportsman</p>
                <p className="m-0 link">Celebrity Like</p>
                <p className="m-0 link">Newborn</p>
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <h6 className="m-0">Collections</h6>
              <div className="d-flex flex-column">
                <p className="m-0 link">For the Culture</p>
                <p className="m-0 link">Next Generation</p>
                <p className="m-0 link">Party Outfits</p>
                <p className="m-0 link">Vacation Outfits</p>
                <p className="m-0 link">Casual Outfits</p>
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <h6 className="m-0">Designers</h6>
              <div className="d-flex flex-column">
                <p className="m-0 link">NYC.</p>
                <p className="m-0 link">Bangladesh Nerds</p>
                <p className="m-0 link">Naija Hottest</p>
                <p className="m-0 link">London Mafias</p>
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <h6 className="m-0">About</h6>
              <div className="d-flex flex-column">
                <p className="m-0 link">About Us</p>
                <p className="m-0 link">Designers</p>
                <p className="m-0 link">Team</p>
                <p className="m-0 link">Terms of Service</p>
                <p className="m-0 link">Privacy Policy</p>
                <p className="m-0 link">Blog</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between flex-wrap align-items-end gap-3">
            <div className="d-flex flex-column gap-2">
              <div>
              <h6 className="m-0">Download Our App.</h6>
              <p className="m-0">Let's bring the fashion to you.</p>
              </div>
              <div className="row gap-1 ml-1 mt-1">
                <Button transparent disabled className="col-md-6 d-flex flex-row align-items-center gap-3">
                  Download for IOS
                  <Icon icon="ic:sharp-apple"  style={{color: "black"}} />
                </Button>
                <Button transparent disabled className="col-md-6 d-flex flex-row align-items-center gap-3">
                  Download for Extension
                  <Icon icon="ri:chrome-fill"  style={{color: "black"}} />                </Button>
              </div>
              <div className="row gap-1 ml-1">
                <Button transparent disabled className="col-md-6 d-flex flex-row align-items-center gap-3">
                  Download APK
                  <Icon icon="uiw:android"  style={{color: "black"}} />
                </Button>
                <Button transparent disabled className="col-md-6 d-flex flex-row align-items-center gap-3">
                  Download for Android
                  <Icon icon="bxl:play-store"  style={{color: "black"}} />
                </Button>
              </div>
            </div>
            <div className="d-flex flex-column">
              <h6>Stay Connected:</h6>
              <div className="d-flex flex-row gap-3">
                <div className="icon-div">
                  <Icon icon="mage:facebook" style={{ color: "white" }} />
                </div>
                <div className="icon-div">
                  <Icon icon="uim:github-alt" style={{ color: "white" }} />{" "}
                </div>{" "}
                <div className="icon-div">
                <Icon icon="fa6-brands:x-twitter"  style={{color: "white"}} />
                  </div>{" "}
                <div className="icon-div">
                  <Icon icon="ri:instagram-fill" style={{ color: "white" }} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  gap: 20px;
  height: auto;
  border-radius: 10px;
  background-color: #e4e6e1;
  p {
    margin: 0;
    font-size: 14px;
  }
  .link{
    cursor: pointer;
    color: #414040;
    &:hover{
      color: black;
      font-weight: 400;
      transition: 0.3s;
    }
  }
  .row {
    height: 100%;
  }
  .col {
    &:first-child {
      border-right: 1px solid grey;
    }
  }
  .icon-div{
    border: 1px solid black;
    padding: 5px 10px;
    background-color: black;
    border-radius: 5px;
  }
`;
