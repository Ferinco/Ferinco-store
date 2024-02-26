import styled from "styled-components";

export default function SliderDiv() {
  return (
    <Wrapper className="d-flex flex-row container mt-4">
        <div className="divs ">
      <div className="test d-flex flex-row gap-2">
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
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
    .test{
      width: 2000px !important;
    overflow-x: scroll !important;
  }
  .div {
    border: 1px solid black;
    border-radius: 20px;
    height: 350px;
 &:first-child{
    width: 500px;
 }
 &:nth-child(2){
    width: 280px;
 }
 &:nth-child(3){
    width: 280px;
 }
 &:nth-child(4){
    width: 400px;
 }
 &:nth-child(5){
    width: 280px;
 }
  }
`;
