import React from 'react';
import styled from 'styled-components';
export default function Right(){
    return(
        <RightDiv className="right">
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../Images/sidebar2.avif" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img src="../Images/sidebar4.avif" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img src="../Images/sidebar5.avif" alt="Third slide"/>
    </div>
  </div>
</div>
        </RightDiv>
    )
}
const RightDiv = styled.div`
width:30%;
`