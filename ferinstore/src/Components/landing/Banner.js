import styled from "styled-components";
import { Button } from "../Custom/button";
function Banner() {
  return (
    <Wrapper className="container banner d-flex flex-column justify-content-center align-items-center text-center gap-0 mt-5">
      <div className="text-div">
        <h1 className="m-0">Your Online destination for online fashion</h1>
      </div>
      <div className="image-div d-flex flex-column">
        <img src="/images/test-bg.png" />
        <div className="absolute-div d-flex justify-content-start p-3">
          <div className="buttons d-flex flex-row gap-1 justify-content-end align-items-end">
            <Button black>Top collections</Button>
            <Button transparent>view more</Button>
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
  h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 52px;
    max-width: 600px;
  }
  .image-div {
    height: 550px;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      display: block;
    }
  }
  .absolute-div {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
  @media (min-width: 300px) and (max-width: 800px) {
    flex-direction: column !important;
  }
`;
export default Banner;
