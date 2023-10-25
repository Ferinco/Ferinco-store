import Left from "./Left"
import Right from "./Right"
import styled from "styled-components"
function Banner(){
    return(
        <Wrapper className=" banner d-flex flex-row pt-2">
<Left/>
<Right/>

        </Wrapper>
    )
}
const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  gap: 20px;
  height: auto;

  @media (min-width: 300px) and (max-width: 800px) {
   flex-direction :column !important;
  }
`
export default Banner
