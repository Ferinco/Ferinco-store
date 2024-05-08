import styled from "styled-components"

export default function Styles() {
  return (
    <StylesDiv className=" mt-5 container">
      <div className="row h-100">
        <div className="col-lg-7 left"></div>
        <div className="col-lg-4 right"></div>
      </div>

    </StylesDiv>
  );
}
const StylesDiv = styled.div`
border: 1px solid red;
height: 600px;
width:100%;
.left, .right{
  border: 1px solid red;
  height: 100%;
}
`
