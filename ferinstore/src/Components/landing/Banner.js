import styled from "styled-components";
import { Button } from "../Custom/button";
function Banner() {
  return (
    <Wrapper className="banner d-flex flex-column mt-5 gap-5">
      <div className="text-div container">
        <h4 className="m-0">
          STEP INTO STYLE: INTRODUCING <br /> FERINSTORE - YOUR FASHION HAVEN
        </h4>
      </div>
      <div className="image-div">
        <div className="back">

          <img src="./images/banner.jpg"/>
        </div>
        <div className="overlay d-flex flex-column justify-content-between px-4">
          <div className="d-flex justify-content-end">
            <button>Discover Your Style</button>
          </div>
          <div className="d-flex justify-content-center brand-name">
            <h1>Clothify.</h1>
          </div>
        </div>
      </div>
      <div className="end-div container">
<h4>LOOK <span className="amazing">AMAZING</span> WITH CLOTHIFY; SHOP <span className="grey-span">HIGH QUALITY</span> FASHION YOURSELF WITHOUT STRETCHING <span className="grey-span">YOUR BUDGET</span></h4>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .text-div {
    h4 {
      font-size: 45px;
    }
  }
  .back{
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
  }
  .brand-name{
    overflow: hidden !important;
  }
  .image-div {
    height: 300px;
    /* border: 1px solid red; */
    position: relative;
  }
  .back{
    height: 300px;
    position: relative;
  }
  .overlay{
    height: 330px;
    position: absolute;
    width: 100%;
    top: 0;
    margin-top: -30px;
  }
  button{
    padding: 10px 25px;
    background-color: black;
    color: white;
    border-radius: 35px;
    border: 4px solid white;
  }
  h1{
    font-size: 200px;
    margin-bottom: -70px;
    color: white;
  }
  .end-div{
    h4{
      font-size: 35px;
      color: grey;
      font-weight: 400 !important;
      line-height: 1.2;
    }
    .amazing{
      color: black !important;
      text-decoration: 2px underline;
    }
    .grey-span{
      text-decoration: 2px underline;
    }
  }
`;
export default Banner;
