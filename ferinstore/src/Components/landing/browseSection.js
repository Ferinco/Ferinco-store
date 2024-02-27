import styled from "styled-components";

export default function BrowseSection() {
  return (
    <Wrapper className="d-flex flex-column container mt-4 gap-5">
      <div className="top-div">
        <img src="/Images/couple.png" />
        <div className="absolute-div d-flex justify-content-start p-3">
          <div className="buttons d-flex flex-row gap-1 justify-content-end align-items-end">
            <button>View</button>
            <button>View</button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column p-4 gap-3">
        <div className="d-flex flex-row justify-content-between align-items-end">
          <div className="small-image">
            <img src="/Images/fashion_1.jpg" />
          </div>
          <h1 className="m-0 text-center px-3">
            Elevate your look with our outstanding collection
          </h1>
          <div className="small-image">
            <img src="/Images/fashion_3.jpg" />
          </div>{" "}
        </div>
        <div className=" d-flex flex-row justify-content-between align-items-top">
          <div className="small-image">
            <img src="/Images/fashion_3.jpg" />
          </div>{" "}
          <button>Browse Collection</button>
          <div className="small-image">
            <img src="/Images/fashion_3.jpg" />
          </div>{" "}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  .top-div {
    height: 450px;
    border-radius: 20px;
    background-color: #e4e6e1;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }
    .absolute-div {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 20px;
      z-index: 99 !important;
      button {
        height: fit-content;
      }
    }
  }
  button{
    border-radius: 30px;
    padding: 10px 25px;
    font-weight: 600;
    background-color: #5cdb95;
    border: 1px solid #5cdb95;
    color: white;


  }
  .small-image {
    height: 200px;
    width: 200px;
    border-radius: 20px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
  h1 {
    font-weight: 700;
  }
  button {
    height: fit-content;
  }
`;
