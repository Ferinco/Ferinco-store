import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <div className="row p-5">
        <div className="col-md-3 col d-flex flex-column justify-content-between">
          <div className="d-flex flex-column gap-3">
            <h4 className="m-0">Logo</h4>
            <div className="d-flex flex-row gap-1"></div>
          </div>
          <div className="d-flex flex-column">
            <p>ferinco</p>
            <p>hjdg</p>
          </div>
        </div>
        <div className="col-md-8 col d-flex flex-row flex-wrap gap-5 px-3 m-auto justify-content-between">
          <div className="d-flex flex-column gap-2">
            <h6>Top Categories</h6>
            <div className="d-flex flex-column">
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <h6>Top Categories</h6>
            <div className="d-flex flex-column">
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <h6>Top Categories</h6>
            <div className="d-flex flex-column">
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <h6>Top Categories</h6>
            <div className="d-flex flex-column">
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <h6>Top Categories</h6>
            <div className="d-flex flex-column">
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <h6>Top Categories</h6>
            <div className="d-flex flex-column">
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
              <p className="m-0">Contact lenses</p>
            </div>
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
  height: 400px;
  border-radius: 10px;
  background-color: #e4e6e1;
  p {
    margin: 0;
  }
  .row {
    height: 100%;
  }
  .col {
    &:first-child {
      border-right: 1px solid grey;
    }
  }
`;
