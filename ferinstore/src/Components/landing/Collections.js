import styled from "styled-components";
export default function Collections() {
  return (
    <CollectionsDiv className="container collections mt-5">
      <div className="header">
        <h3 className="desktop-header">
          Upgrade Your Style With Our Streetwear Collection
        </h3>
        <h3 className="mobile-header">
          Upgrade Your Style With Our Streetwear Collection
        </h3>
        <button className="desktop-link">see more collection</button>
      </div>
      <div className="body mt-5">
        <div className="image d-flex justify-content-center align-items-center">
          <h2>african</h2>
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
    .desktop-header {
      font-weight: 800 !important;
      font-size: 40px;
      width:70%;
      @media (max-width: 600px){
      font-size:30px;
      width:93%;
    }
    }
    .mobile-header {
      display: none;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
     color: white;
     padding: 10px 20px;
     border: 1px solid #5cdb95;
     border-radius: 20px;
     background-color: #5cdb95;
    }
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
      h2 {
    color: white;
    font-size: 70px;
    text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);
    text-transform: uppercase;
  }
    &:first-child {
      background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/Images/Collection/k-style.jpg);
    }
    &:nth-child(2) {
      background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/Images/Collection/casual.avif);
    }
  }
  .link {
    display: none;
    background-color: #5cdb95;
    padding: 10px ;
      justify-content: center;
      border: 0;
      border-radius: 20px;
      color: white;
      font-size: 30px;
  }
  @media screen and (min-width: 500px) and (max-width: 768px){
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
        height:400px;
    &:first-child {
      background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/Images/Collection/AfricanP.avif);
    }
    &:nth-child(2) {
      background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/Images/Collection/casualP.avif);
    }
    &:nth-child(3) {
      background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/Images/Collection/k-styleP.avif);
    }
    &:nth-child(4) {
      background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/Images/Collection/sportsP.jpg);
    }
  }
  }
  @media screen and (max-width: 991px){
.desktop-link{
    display:none;
}
.link{
    display: flex;
}
  }
`;
