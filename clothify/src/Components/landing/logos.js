import Marquee from "react-fast-marquee";
import styled from "styled-components";

export default function BrandLogos(){
 return(
     
     <Marquee
     speed={30}
     gradientColor="248 252 253"
     gradientWidth={200}
     direction="left"
    >
   <Wrapper className="d-flex gap-5 mt-5" >
   <Div className="d-flex flex-row gap-5">
       <div className="logo">
            <img src="../Images/Logos/logo (1).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (2).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (3).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (4).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (5).png" />
          </div>
      </Div>
      <Div className="d-flex flex-row gap-5">
       <div className="logo">
            <img src="../Images/Logos/logo (1).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (2).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (3).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (4).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (5).png" />
          </div>
      </Div>
      <Div className="d-flex flex-row gap-5">
       <div className="logo">
            <img src="../Images/Logos/logo (1).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (2).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (3).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (4).png" />
          </div>
          <div className="logo">
            <img src="../Images/Logos/logo (5).png" />
          </div>
      </Div>
   </Wrapper>

    </Marquee>
 )

};
const Wrapper = styled.div`
`
const Div = styled.div`
  .logo {
      width: 70px;
      height: 70px;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
`