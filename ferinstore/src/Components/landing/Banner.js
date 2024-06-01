import styled from "styled-components";
import { Button } from "../Custom/button";
import { Icon } from "@iconify/react/dist/iconify.js";
function Banner() {
  return (
    <Wrapper className="container banner d-flex flex-column justify-content-center align-items-center text-center gap-0 mt-5">
      <div className="text-div d-flex flex-row justify-content-between align-items-center w-100">
        <Icon icon="noto:sunflower" width="2.3em" height="2.3em" />
        <h1 className="m-0">Your Online destination for online fashion</h1>
        <Icon icon="emojione:rosette" width="2.3em" height="2.3em" />
      </div>
      <div className="banner-div d-flex flex-column w-100 h-100">
        <div className="back d-flex flex-column justify-content-between h-100">
          <div className="top d-flex flex-row justify-content-between">
            <div className="d-flex flex-row gap-5">
              <div className="d-flex flex-column gap-2 summer">
                <p>Summer Collection</p>
                <h4 className="text-start">
                  TRANDY AND <br /> CLUSSI FOR <br /> NEW SEASON
                </h4>
              </div>
              <Icon icon="fluent-emoji:rosette" width="2.7em" height="2.7em" />
            </div>
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M75,75 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                />
              </defs>
              <text
                fontSize="10"
                fontFamily="Arial, sans-serif"
                letterSpacing="0.5"
              >
                <textPath href="#circlePath" startOffset="50%">
                  EXPLORE MORE COLLECTION
                </textPath>
              </text>
              <circle cx="75" cy="75" r="50" fill="none" />
              <polygon points="70,72 80,75 70,78" fill="black" />
            </svg>
          </div>
          <div className="bottom d-flex flex-row justify-content-between">
            <div className="d-flex flex-row gap-3 align-items-end">
              <div className="d-flex flex-column gap-1 text-start">
                <Icon
                  icon="fe:quote-left"
                  width="3.2em"
                  height="3.2em"
                  style={{ color: "black" }}
                />
                <p>
                  I'm very much of the 'buy less and buy <br />
                  better' persuasion but never really knew
                  <br /> where to look.
                </p>
              </div>
              <Icon icon="emojione:rosette" width="2.2em" height="2.2em" />
            </div>
            <div className="d-flex flex-column align-items-end gap-5">
              <Icon icon="noto:wilted-flower" width="2.0em" height="2.0em" />
              <div className="d-flex flex-row gap-3 align-items-end">
                <h1>01</h1>
                <div className="d-flex flex-column">
                  <p>31 May 2024 . Blog</p>
                  <h5>
                    Always be strong <br />
                    and have values
                  </h5>
                </div>
                <button>
                  <Icon
                    icon="mynaui:arrow-right"
                    width="1.2em"
                    height="1.2em"
                    style={{ color: "white" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="image-div d-flex flex-row align-items-center">
          <div className="div-1">
            <img src="/images/banner_images/image_1.png" />
          </div>
          <div className="div-2 d-flex flex-column">
            <div className="first item">
              <img src="/images/banner_images/image_2.png" />
            </div>
            <div className="second">
            <img src="/images/banner_images/image_3.png" />
            </div>
          </div>
          <div className="div-3"></div>
          <div className="div-4 d-flex flex-column">
            <div className="first">
            <img src="/images/banner_images/image_4.png" />

            </div>
            <div className="second">
            <img src="/images/banner_images/image_5.png" />
            </div>
          </div>
          <div className="div-5">
          <img src="/images/banner_images/image_6.png" />

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
  .div-1 {
    height: 217px;
    width: 208px;
    border-radius: 15px;
    background-color: #c89f68;
    cursor: pointer;
    transition: 0.5s;
    img {
      width: max-content;
      height: max-content;
      object-fit: cover;
      object-position: center;
      margin-top: 22px !important;
    }
    &:hover {
      background-color: red !important;
    }
  }
  .div-2 {
    gap: 23px;
    .first {
      height: 137px;
      width: 213px;
      border-radius: 15px;
      background-color: #a9b7a9;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: max-content;
        height: max-content;
        object-fit: cover;
        object-position: center;
        margin-top: -30px;
      }
    }
    .second {
      height: 218.56px;
      width: 209.5px;
      border-radius: 15px;
      background-color: #4499a5;
      
    }
  }
  .div-3 {
    height: 473px;
    width: 257.57px;
    border-radius: 15px;
    background-color: #f6c737;
  }
  .div-4 {
    gap: 23px;

    .second {
      height: 137px;
      width: 213px;
      border-radius: 15px;
      background-color: #4499a5;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: max-content;
        height: max-content;
        object-fit: cover;
        object-position: center;
        margin-top: -163px;
      }
    }
    .first {
      height: 218.56px;
      width: 209.5px;
      border-radius: 15px;
      background-color: #f1833f;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: max-content;
        height: max-content;
        object-fit: cover;
        object-position: center;
        margin-bottom: 82px;
      }
    }
  }
  .div-5 {
    gap: 23px;
    height: 217px;
    width: 208px;
    border-radius: 15px;
    background-color: #74bc8f;
  }
  .summer {
    p {
      font-size: 12px !important;
      text-align: start;
    }
    h4 {
      line-height: 1.2;
      font-size: 22px;
    }
  }
  p,
  h1,
  h5,
  h4 {
    margin: 0 !important;
  }
  h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 52px;
    max-width: 600px;
  }
  .banner-div {
    position: relative;
    height: 550px !important;
  }
  .back {
    position: relative;
    /* z-index: 999; */
  }
  .image-div {
    height: 550px;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    position: absolute;
    gap: 19px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      display: block;
    }
  }
  .bottom {
    h1 {
      font-weight: 300 !important;
    }
    p {
      font-size: 12px;
    }
    h5 {
      font-size: 18px;
    }
    button {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: black;
      color: white;
    }
  }
  @media (min-width: 300px) and (max-width: 800px) {
    flex-direction: column !important;
  }
`;
export default Banner;
